import { GamePointsComponent } from "./components/game-points.js";
import { CommandPointsComponent } from "./components/command-points.js";
import { ItcObjectivesComponent } from "./components/itc-objectives.js";
import { ItcObjectivesSecondariesComponent } from "./components/itc-objectives-secondaries.js";

var db = firebase.firestore();

const ActiveGameComponent = {
    data: () => ({ activeGameData: [], activeGamePlayers: [], userLoggedIn: false, user: -1, showMessage: false }),
    created() {
        this.getDataFromDB();
    },
    methods: {
        getDataFromDB() {
            db.collection("players").onSnapshot(query => {
                this.activeGameData = [];
                query.forEach(players => {
                    this.activeGamePlayers.push(players.id);
                    this.activeGameData.push(players.data());
                });
                this.checkLoggedIn();
            });
        },
        onUpdate(data) {
            this.updateData(data.key, data.id, data.add, data.parent ? data.parent : false);
        },
        updateData(key, id, add, parent) {
            var player = this.activeGameData.filter(data => data.id === id)[0];
            var playerIndex = this.activeGameData.indexOf(player);
            if (!parent) {
                player[key] = add ? player[key] + 1 : player[key] - 1;
            } else {
                (player[parent])[key] = add ? (player[parent])[key] + 1 : (player[parent])[key] - 1;
            }
            db.collection("players").doc(this.activeGamePlayers[playerIndex]).update(player);
        },
        login() {
            db.collection("players").where("name", "==", this.$refs.login.value).get().then(query => {
                this.showMessage = false;
                if (query.empty) {
                    this.showMessage = true;
                }

                query.forEach(player => {
                    this.user = player.data().id;
                    this.userLoggedIn = true;
                    localStorage.setItem("user", player.data().id);
                });
            });
        },
        spectate() {
            this.userLoggedIn = true;
            localStorage.setItem("spectate", true);
        },
        checkLoggedIn() {
            var localUser = localStorage.getItem("user");
            var spectate = localStorage.getItem("spectate");
            if (localUser) {
                this.userLoggedIn = true;
                this.user = localUser;
            }

            if (spectate) {
                this.userLoggedIn = true;
                this.user = "";
            }

            
        },
        logout() {
            this.userLoggedIn = false;
            this.user = "";
            localStorage.removeItem("user");
            localStorage.removeItem("spectate");
        }
    },
    components: {
        "game-points-component": GamePointsComponent,
        "command-points-component": CommandPointsComponent,
        "itc-objectives-component": ItcObjectivesComponent,
        "itc-objectives-secondaries-component": ItcObjectivesSecondariesComponent
    },
    template: `<div class="main-container">
    <div class="active-game" v-if='userLoggedIn'>
        <game-points-component :user="user" :players="activeGameData" @gamePoints=onUpdate></game-points-component>
        <h4 class="ui horizontal divider header">
            <i class="icon icon-bolter-mkv"></i>
            Details
        </h4>
        <div class="ui two column grid">
            <command-points-component :user="user" :players="activeGameData" @gamePoints=onUpdate></command-points-component>
            <itc-objectives-component :user="user" :players="activeGameData" @gamePoints=onUpdate></itc-objectives-component>
            <itc-objectives-secondaries-component :user="user" :players="activeGameData" @gamePoints=onUpdate></itc-objectives-secondaries-component>
        </div>
        <div class="ui divider"></div>
        <div class="two ui buttons">
            <div class="ui button basic mini" @click=logout v-if="user">Logout</div>
            <div class="ui button basic red" v-if="user">Finish Game</div>
            <div class="ui button basic red" v-if="!user" @click=logout>Exit</div>
        </div>
        <div class="ui divider"></div>
    </div>
    <div class="login" v-if='!userLoggedIn && activeGameData'>
        <div class="ui segment raised">
            <h1>Login</h1>
            <div class="ui action fluid input">
                <input type="text" placeholder="Enter User's Name" ref="login">
                <button class="ui button" @click=login>Login</button>
            </div>

            <div class="ui negative tiny message" v-if='showMessage'>
                <div class="header">
                    The user does not exist
                </div>
                <p>Please try again!</p>
            </div>

            <div class="ui divider horizontal">or</div>

            <h2>Spectate</h2>
            <div class="ui middle aligned divided list">
                <div class="item">
                    <div class="right floated content">
                        <a class="ui button tiny" @click="spectate">Enter</a>
                    </div>
                    <div class="middle aligned content"><h3>{{ activeGameData[0].name }} ({{ activeGameData[0].vp }}) vs {{ activeGameData[1].name }} ({{ activeGameData[1].vp }})</h3></div>
                </div>
            </div>
        </div>
        
    </div>
    
    </div>`
};

export { ActiveGameComponent };