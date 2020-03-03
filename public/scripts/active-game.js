import { GamePointsComponent } from "./components/game-points.js";
import { CommandPointsComponent } from "./components/command-points.js";
import { ItcObjectivesComponent } from "./components/itc-objectives.js";
import { ItcObjectivesSecondariesComponent } from "./components/itc-objectives-secondaries.js";

var db = firebase.firestore();

const ActiveGameComponent = {
    data: () => ({ activeGameData: [] }),
    created() {
        this.getDataFromDB()
    },
    methods: {
        getDataFromDB() {
            db.collection("players").onSnapshot(query => {
                this.activeGameData = [];
                query.forEach(players => {
                    this.activeGameData.push(players.data());
                });
            });
        }
    },
    components: {
        "game-points-component": GamePointsComponent,
        "command-points-component": CommandPointsComponent,
        "itc-objectives-component": ItcObjectivesComponent,
        "itc-objectives-secondaries-component": ItcObjectivesSecondariesComponent
    },
    template: `<div class="main-container">
    <game-points-component v-bind:players="activeGameData"></game-points-component>
    <h4 class="ui horizontal divider header">
        <i class="icon icon-bolter-mkv"></i>
        Details
    </h4>
    <div class="ui two column grid">
        <command-points-component v-bind:players="activeGameData"></command-points-component>
        <itc-objectives-component v-bind:players="activeGameData"></itc-objectives-component>
        <itc-objectives-secondaries-component v-bind:players="activeGameData"></itc-objectives-secondaries-component>
    </div>
    <div class="ui divider"></div>
    <div class="two ui buttons">
        <div class="ui button basic">Cancel</div>
        <div class="ui button basic red">Finish Game</div>
    </div>
    <div class="ui divider"></div>
    </div>`
};

export { ActiveGameComponent };