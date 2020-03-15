const NewGameComponent = {
    data: () => ({
        model: {
            gameTypeValue: "eternal",
            maps: [
                { value: "assets/maps/spearhead-assault.png", text: "Spearhead Assault" },
                { value: "assets/maps/dawn-of-war.png", text: "Dawn of War" },
                { value: "assets/maps/search-and-destroy.png", text: "Search and Destroy" },
                { value: "assets/maps/hammer-and-anvil.png", text: "Hammer and Anvil" },
                { value: "assets/maps/frontline-assault.png", text: "Front-line Assault" },
                { value: "assets/maps/vanguard-strike.png", text: "Vanguard Strike" }
            ],
            factions: [
                { value: "adeptus-mechanicus", text: "Adeptus Mechanicus" },
                { value: "death-guard", text: "Death Guard" },
                { value: "imperial-knights", text: "Imperial Knights" },
                { value: "iron-hands", text: "Iron Hands" },
                { value: "necrons", text: "Necrons" },
                { value: "sisters-of-battle", text: "Adepta Sororitas" }
            ],
            secondaries: [
                { value: "hh", text: "Headhunter" },
                { value: "ks", text: "Kingslayer" },
                { value: "mfd", text: "Marked For Death" },
                { value: "ts", text: "Titan Slayers" },
                { value: "gb", text: "Gang Busters" },
                { value: "bgh", text: "Big Game Hunter" },
                { value: "pyp", text: "Pick Your Poison" },
                { value: "bb", text: "Butcher’s Bill" },
                { value: "tr", text: "The Reaper" },
                { value: "r", text: "Recon" },
                { value: "bel", text: "Behind Enemy Lines" },
                { value: "gc", text: "Ground Control" },
                { value: "koth", text: "King of the Hill" },
                { value: "e", text: "Engineers" },
                { value: "os", text: "Old School" }
            ],
            player: [
                {
                    name: "",
                    cp: "",
                    factions: [],
                    secondaries: []
                },
                {
                    name: "",
                    cp: "",
                    factions: [],
                    secondaries: []
                }
            ]
        }
    }),
    mounted: () => {
        $(".dropdown").dropdown();
        $(".checkbox").checkbox();
        $('.ui.slider.checkbox').popup();
;
    },
    template: `<div class="main-container">
    <h1>Create a new Game</h1>
    <form class="ui equal width form new-game">
        
        <h4 class="ui dividing header">Standard Deployment Map (D6):</h4>
        <div class="ui grid">
            <template v-for="map in model.maps">
                <div class="four wide column">
                    <div class="ui avatar"><img :src=map.value class='small-tooltip'></div>
                </div>
                <div class="twelve wide column map-selection-item">
                    <div class="field">
                        <div class="ui radio checkbox" data-html="">
                            <input type="radio" name="map" tabindex="0" class="hidden">
                            <label>{{ map.text }}</label>
                        </div>
                    </div>
                </div>
            </template>
        </div>

        <h4 class="ui dividing header">Game Type</h4>
        <div class="field" >
            <div class="ui radio checkbox" >
                <input type="radio" name="game-type" id="eternal" value="eternal" :checked="model.gameTypeValue === 'eternal'" v-model="model.gameTypeValue" class="hidden">
                <label>Matched Play: Eternal War</label>
            </div>
        </div>
        <div class="field" >
            <div class="ui radio checkbox" >
                <input type="radio" name="game-type" id="maelstorm" value="maelstorm" :checked="model.gameTypeValue === 'maelstorm'" v-model="model.gameTypeValue" class="hidden">
                <label>Matched Play: Maelstorm</label>
            </div>
        </div>
        <div class="field">
            <div class="ui radio checkbox">
                <input type="radio" name="game-type" id="itc" value="itc" :checked="model.gameTypeValue === 'itc'" v-model="model.gameTypeValue" class="hidden">
                <label>ITC</label>
            </div>
        </div>
        
        <h4 class="ui dividing header heading">First Player</h4>
        <div class="field">
            <input type="text" name="first-player-name'" v-model="model.player[0].name" placeholder="Name">
        </div>
        <div class="field">
            <input type="text" name="first-command-points" v-model="model.player[0].cp" placeholder="CP">
        </div>
        <div class="field">
            <div class="ui selection dropdown">
                <input type="hidden" name="first-faction" v-model="model.player[0].factions">
                <i class="dropdown icon"></i>
                <div class="default text">Faction</div>
                <div class="menu">
                    <div class="item" v-for="faction in model.factions" data-value="faction.value">{{ faction.text }}</div>
                </div>
            </div>
        </div>
        <div class="field" v-bind:class="{ hidden: model.gameTypeValue != 'itc' }">
            <select v-model="model.player[0].secondaries" multiple="" class="ui fluid dropdown">
                <option value="">ITC Secondaries</option>
                <option v-for="secondary in model.secondaries" value="secondary.value">{{ secondary.text }}</option>
            </select>
        </div>

        <h4 class="ui dividing header heading">Second Player</h4>
        <div class="field">
            <input type="text" name="second-player-name" v-model="model.player[1].name" placeholder="Name">
        </div>
        <div class="field">
            <input type="text" name="second-command-points" v-model="model.player[1].cp" placeholder="CP">
        </div>
        <div class="field">
            <div class="ui selection dropdown">
                <input type="hidden" name="second-faction" v-model="model.player[1].factions">
                <i class="dropdown icon"></i>
                <div class="default text">Faction</div>
                <div class="menu">
                    <div class="item" v-for="faction in model.factions" data-value="faction.value">{{ faction.text }}</div>
                </div>
            </div>
        </div>
        <div class="field" v-bind:class="{ hidden: model.gameTypeValue != 'itc' }">
            <select v-model="model.player[1].secondaries" multiple="" class="ui fluid dropdown">
                <option value="">ITC Secondaries</option>
                <option v-for="secondary in model.secondaries" value="secondary.value">{{ secondary.text }}</option>
            </select>
        </div>
        
        <h4 class="ui dividing header"></h4>
        <button class="ui button" type="submit">Submit</button>
    </form>
    </div>`,
    methods: {
        gameType(value) {
            this.model.gameTypeValue = value;
            console.log(this.model);
        }
    }
};

export { NewGameComponent };