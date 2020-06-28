import { GamePointsComponent } from "./components/game-points.js";
import { CommandPointsComponent } from "./components/command-points.js";
import { ItcObjectivesComponent } from "./components/itc-objectives.js";
import { ItcObjectivesSecondariesComponent } from "./components/itc-objectives-secondaries.js";

var db = firebase.firestore();

const ActiveGameComponent = {
    components: {
        "game-points-component": GamePointsComponent,
        "command-points-component": CommandPointsComponent,
        "itc-objectives-component": ItcObjectivesComponent,
        "itc-objectives-secondaries-component": ItcObjectivesSecondariesComponent
    },
    template: `
    Hello
    <div class="active-game" v-if='activeGameId !== "" || !user'>
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
            <div class="ui button basic mini" @click=logout v-if="user">Logout</div>
            <div class="ui button basic red" v-if="user">Finish Game</div>
            <div class="ui button basic red" v-if="!user" @click=logout>Exit</div>
        </div>
        <div class="ui divider"></div>
    </div>
    `
}

export { ActiveGameComponent };