const objectiveText = {
    hh: "Headhunter",
    os: "Old School",
    e: "Engineers",
    mfd: "Marked for Death",
    bel: "Behind enemy lines",
    gb: "Gang Busters",
    bgh: "Big Game Hunter",
    tbb: "The Bucher's Bill",
    tr: "The Reaper",
    r: "Recon",
    gc: "Ground Control",
    koth: "King of The Hill",
    s: "Sappers",
    tp: "The Postman"
}

const objectives = ["hh", "ks", "os", "e", "mfd", "bel"];

const ItcObjectivesSecondariesComponent = {
    props: ["players", "user"],
    data: function() { return { objectives: objectives, objectiveText: objectiveText, secondaries: [], checked: false}},
    updated() {
        this.updateValues()
    },
    methods: {
        updateValues() {
            if (!this.checked && this.$options.propsData.players) {
                this.checked = true;
                this.secondaries.push(Object.keys(this.players[0].secondaries));
                this.secondaries.push(Object.keys(this.players[1].secondaries));
            }

        }
    },
    template: `
    <div class="row">
        <div class="column" v-for="(player, index) in players">
            <h5 v-if="player.secondaries">Secondary Objectives:</h5>
            <div v-if="player.secondaries" class="ui middle aligned divided list">
                <div class="item objectives" v-for="objective in secondaries[index]">
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