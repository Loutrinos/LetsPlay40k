const objectiveText = {
    hh: "Headhunter",
    ks: "Kingslayer",
    os: "Old School",
    e: "Engineers",
    mfd: "Marked for Death",
    bel: "Behind enemy lines"
}

const objectives = ["hh", "ks", "os", "e", "mfd", "bel"];

const ItcObjectivesSecondariesComponent = {
    data: () => ({ objectives: objectives, objectiveText: objectiveText }),
    props: ["players", "user"],
    template: `
    <div class="row">
        <div class="column" v-for="player in players">
            <h5>Secondary Objectives:</h5>
            <div class="ui middle aligned divided list">
                <div class="item objectives" v-for="objective in objectives" v-if="player.secondaries[objective] != undefined">
                    <div class="right floated content">
                        <button class="ui button icon mini" @click="$emit('gamePoints', { id: player.id, add: false, key: objective, parent: 'secondaries' })" v-if="player.id == user">
                            <i class="minus icon"></i>
                        </button>
                        {{ player.secondaries[objective] }}
                        <button class="ui button icon mini" @click="$emit('gamePoints', { id: player.id, add: true, key: objective, parent: 'secondaries' })" v-if="player.id == user">
                            <i class="plus icon"></i>
                        </button>
                    </div>
                    <div class="middle aligned content">
                        {{ objectiveText[objective] }}
                    </div>
                </div>
            </div>
        </div>
    </div>`
};

export { ItcObjectivesSecondariesComponent };