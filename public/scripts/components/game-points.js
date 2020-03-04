const GamePointsComponent = {
    props: ["players", "user"],
    template: `
    <div class="ui segments">
        <div class="ui segment">
            <div class="ui two column center aligned grid">
                <div class="ui vertical divider inverted">VS</div>
                <div class="ui item column red" v-for="player in players">
                    <i class="ui icon large" v-bind:class="'icon-'+ player.icon"></i> {{ player.faction }}
                </div>
            </div>
        </div>
        <div class="ui segment attached inverted">
        <div class="ui vertical divider fitted inverted"></div>
            <div class="ui two statistics inverted">
                <div class="statistic" v-for="player in players">
                    <div class="value">{{ player.vp }}</div>
                    <div class="label">{{ player.name }}</div>
                </div>
            </div>
            <div class="ui grid ">
                <div class="eight wide column" v-for="player in players">
                    <div class="ui two buttons inverted" v-if="player.id == user">
                        <button class="ui button icon inverted" @click="$emit('gamePoints', { id: player.id, add: false, key: 'vp' })" tabindex="0">
                            <i class="ui icon minus"></i>
                        </button>
                        <div class="or"></div>
                        <button class="ui button icon inverted" @click="$emit('gamePoints', { id: player.id, add: true, key: 'vp' })" tabindex="0">
                            <i class="ui icon plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>`
};

export { GamePointsComponent };