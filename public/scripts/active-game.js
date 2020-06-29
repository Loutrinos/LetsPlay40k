import { GamePointsComponent } from "./components/game-points.js";
import { CommandPointsComponent } from "./components/command-points.js";
import { ItcObjectivesComponent } from "./components/itc-objectives.js";
import { ItcObjectivesSecondariesComponent } from "./components/itc-objectives-secondaries.js";

var db = firebase.firestore();

const ActiveGameComponent = {
    data: () => ({ activeGame: {}, user: "", gameId: "" }),
    created() {
        this.getDataFromDB();
    },
    methods: {
        getDataFromDB() {
            // get logged in user
            this.user = window.localStorage.getItem("user");
            // get active game
            this.gameId = this.$route.params.id;
            if (!this.gameId) {
                this.$router.push("/home");
            }
            db.collection("games").doc(this.gameId).onSnapshot(snapshot => {
                this.activeGame = snapshot.data();
                this.calculatePoints();
            });
        },
        onUpdate(data) {
            const { key, id, add, parent } = data;
            var updatedGame = { ...this.activeGame };
            var player = updatedGame.players.filter(player => player.id === this.user)[0];
            if (!parent) {	
                player[key] = add ? player[key] + 1 : player[key] - 1;	
                if (player[key] < 0) {
                    player[key] = 0;
                }
            } else {	
                (player[parent])[key] = add ? (player[parent])[key] + 1 : (player[parent])[key] - 1;	
                if ((player[parent])[key] < 0) {
                    (player[parent])[key] = 0;
                }
            }

            db.collection("games").doc(this.gameId).update(updatedGame);
        },
        exit() {
            if (this.user) {
                localStorage.removeItem("user");
            };
            this.$router.go(-1);
        },
        finish() {
            const updatedGame = { ...this.activeGame };
            updatedGame.active = false
            db.collection("games").doc(this.gameId).update(updatedGame);
            this.exit();
        }
    },
    components: {
        "game-points-component": GamePointsComponent,
        "command-points-component": CommandPointsComponent,
        "itc-objectives-component": ItcObjectivesComponent,
        "itc-objectives-secondaries-component": ItcObjectivesSecondariesComponent
    },
    template: `
    
    <div class="active-game main-container">
        <game-points-component :user="user" :players="activeGame.players" @gamePoints=onUpdate></game-points-component>
        <h4 class="ui horizontal divider header">
            <i class="icon icon-bolter-mkv"></i>
            Details
        </h4>
        <div class="ui two column grid">
            <command-points-component :user="user" :players="activeGame.players" @gamePoints=onUpdate></command-points-component>
            <itc-objectives-component :user="user" :players="activeGame.players" @gamePoints=onUpdate></itc-objectives-component>
            <itc-objectives-secondaries-component :user="user" :players="activeGame.players" @gamePoints=onUpdate></itc-objectives-secondaries-component>
        </div>
        <div class="ui divider"></div>
        <div class="two ui buttons">
            <div class="ui button basic mini" @click=exit() v-if="user">Logout</div>
            <div class="ui button basic red" v-if="user" @click=finish()>Finish Game</div>
            <div class="ui button basic red" v-if="!user" @click=exit()>Exit</div>
        </div>
        <div class="ui divider"></div>
    </div>
    `
}

export { ActiveGameComponent };