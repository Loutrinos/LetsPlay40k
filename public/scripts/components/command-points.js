const CommandPointsComponent = {
    props: ["players", "user"],
    template: `
    <div class="row">
        <div class="column" v-for="player in players">
            <h5>Command Points:</h5>
            <div class="ui one statistics">
                <div class="statistic">
                    <div class="value">{{ player.cp }}</div>
                    <div class="label">of {{ player.maxCp }}</div>
                </div>
                <div class="ui two buttons" v-if="player.id == user">
                    <button class="ui button icon" @click="$emit('gamePoints', { id: player.id, add: false, key: 'cp' })">
                        <i class="ui icon minus"></i>
                    </button>
                    <div class="or"></div>
                    <button class="ui button icon" @click="$emit('gamePoints', { id: player.id, add: true, key: 'cp' })">
                        <i class="ui icon plus"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
    `
};

export { CommandPointsComponent };