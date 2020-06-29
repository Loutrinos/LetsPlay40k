const NewGameComponent = {
    data: () => ({
        model: {
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
                { value: "os", text: "Old School" },
                { value: "hh", text: "Headhunter" },
                { value: "mfd", text: "Marked For Death" },
                { value: "gb", text: "Gang Busters" },
                { value: "bgh", text: "Big Game Hunter" },
                { value: "tbb", text: "The Butcher’s Bill" },
                { value: "tr", text: "The Reaper" },
                { value: "r", text: "Recon" },
                { value: "bel", text: "Behind Enemy Lines" },
                { value: "gc", text: "Ground Control" },
                { value: "koth", text: "King of the Hill" },
                { value: "e", text: "Engineers" },
                { value: "s", text: "Sappers" },
                { value: "tp", text: "The Postman" }
            ],
            error: ""
        },
        data: {
            gameTypeValue: "eternal",
            map: {
                value: "",
                text: ""
            },
            players: [ 
                {
                    name: "",
                    cp: "",
                    factions: "",
                    secondaries: [],
                    primaries: {
                        kill: 0,
                        killM: 0,
                        obj: 0,
                        objM: 0
                    },
                    text: ""
                },
                {
                    name: "",
                    cp: "",
                    factions: "",
                    primaries: {
                        kill: 0,
                        killM: 0,
                        obj: 0,
                        objM: 0
                    },
                    secondaries: []
                }
            ]
        }
    }),
    mounted: () => {
        var t = this;
        $(".dropdown").dropdown({
            maxSelections: 3
        });
        $(".checkbox").checkbox();
        $('.ui.slider.checkbox').popup();
    },
    template: `<div class="main-container">
    <h1>Create a new Game</h1>
    <form class="ui equal width form new-game" :class="{ error: model.error }" id="game" action="" @submit.prevent="formSubmit">
        
        <h4 class="ui dividing header">Standard Deployment Map (D6):</h4>
        <div class="ui grid">
            <template v-for="(map, index) in model.maps">
                <div class="four wide column">
                    <div class="ui avatar"><img :src=map.value class='small-tooltip'></div>
                </div>
                <div class="twelve wide column map-selection-item">
                    <div class="field">
                        <div class="ui radio checkbox" @click="mapChange(map)">
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
                <input type="radio" name="game-type" id="eternal" value="eternal" :checked="model.gameTypeValue === 'eternal'" v-model="data.gameTypeValue" class="hidden">
                <label>Matched Play: Eternal War</label>
            </div>
        </div>
        <div class="field" >
            <div class="ui radio checkbox" >
                <input type="radio" name="game-type" id="maelstorm" value="maelstorm" :checked="model.gameTypeValue === 'maelstorm'" v-model="data.gameTypeValue" class="hidden">
                <label>Matched Play: Maelstorm</label>
            </div>
        </div>
        <div class="field">
            <div class="ui radio checkbox">
                <input type="radio" name="game-type" id="itc" value="itc" :checked="model.gameTypeValue === 'itc'" v-model="data.gameTypeValue" class="hidden">
                <label>ITC</label>
            </div>
        </div>
        
        <h4 class="ui dividing header heading">First Player</h4>
        <div class="field">
            <input type="text" name="first-player-name'" v-model="data.players[0].name" placeholder="Name">
        </div>
        <div class="field">
            <input type="number" name="first-command-points" v-model="data.players[0].cp" placeholder="CP">
        </div>
        <div class="field">
            <div class="ui selection dropdown first">
                <input type="hidden" name="first-faction">
                <i class="dropdown icon"></i>
                <div class="default text">Faction</div>
                <div class="menu first-faction-dropdown">
                    <div class="item" v-for="faction in model.factions" :data-value="faction.value">{{ faction.text }}</div>
                </div>
            </div>
        </div>
        <div class="field" v-bind:class="{ hidden: data.gameTypeValue != 'itc' }">
            <select v-model="data.players[0].secondaries" multiple="" id="first-secondaries" class="ui fluid dropdown">
                <option value="">ITC Secondaries</option>
                <option v-for="secondary in model.secondaries" :value="secondary.value">{{ secondary.text }}</option>
            </select>
        </div>

        <h4 class="ui dividing header heading">Second Player</h4>
        <div class="field">
            <input type="text" name="second-player-name" v-model="data.players[1].name" placeholder="Name">
        </div>
        <div class="field">
            <input type="number" name="second-command-points" v-model="data.players[1].cp" placeholder="CP">
        </div>
        <div class="field">
            <div class="ui selection dropdown second">
                <input type="hidden" name="second-faction">
                <i class="dropdown icon"></i>
                <div class="default text">Faction</div>
                <div class="menu second-faction-dropdown">
                    <div class="item" v-for="faction in model.factions" :data-value="faction.value">{{ faction.text }}</div>
                </div>
            </div>
        </div>
        <div class="field" v-bind:class="{ hidden: data.gameTypeValue != 'itc' }">
            <select v-model="data.players[1].secondaries" multiple="" id="second-secondaries" class="ui fluid dropdown">
                <option value="">ITC Secondaries</option>
                <option v-for="secondary in model.secondaries" :value="secondary.value">{{ secondary.text }}</option>
            </select>
        </div>
        
        <h4 class="ui dividing header"></h4>
        <button class="ui button" type="submit" :click="formSubmit">Submit</button>
        <div class="ui message error" v-if="model.error.length">
            <div class="header">Please select the following:</div>
            <ul class="list">
                <li v-for="error in model.error">{{ error }}</li>
            </ul>
        </div>
        <h4 class="ui dividing header"></h4>
    </form>
    </div>`,
    methods: {
        gameType(value) {
            this.model.gameTypeValue = value;
        },
        mapChange(value) {
            this.data.map = { value: value.value, text: value.text };
        },
        formSubmit() {
            // validation
            let messages = [];
            if (this.data.map.value == "") { messages.push("map"); }

            this.data.players[0].factions = $(".ui.dropdown.first").dropdown("get value");
            if (this.data.players[0].factions != []) { this.data.players[0].text = this.model.factions.filter(faction => faction.value === this.data.players[0].factions)[0].text }
            this.data.players[1].factions = $(".ui.dropdown.second").dropdown("get value");
            if (this.data.players[1].factions != []) { this.data.players[1].text = this.model.factions.filter(faction => faction.value === this.data.players[1].factions)[0].text }

            if (this.data.players[0].name == "") { messages.push("first player name"); }
            if (this.data.players[0].cp == 0) { messages.push("first player CP"); }
            if (this.data.players[0].factions == []) { messages.push("first player faction"); }
            if ((this.data.gameTypeValue == "itc") && (this.data.players[0].secondaries.length == 0)) { messages.push("first player secondaries"); }

            if (this.data.players[1].name == "") { messages.push("second player name"); }
            if (this.data.players[1].cp == 0) { messages.push("second player CP"); }
            if (this.data.players[1].factions == []) { messages.push("second player faction"); }
            if ((this.data.gameTypeValue == "itc") && (this.data.players[1].secondaries.length == 0)) { messages.push("second player secondaries"); }
            
            if (messages.length > 0) {
                this.model.error = messages;
                return;
            }

            const players = [];
            
            this.data.players[0].cp = this.data.players[0].cp * 1;
            this.data.players[0].maxCp = this.data.players[0].cp
            this.data.players[0].id = this.randomId();
            this.data.players[0].vp = 0;

            players.push({ ...this.data.players[0]});
            let tempSecondaries = Object.assign({}, ...this.data.players[0].secondaries.map(secondary => ({[secondary]: 0})));
            players[0].secondaries = { ...tempSecondaries };

            this.data.players[1].cp = this.data.players[1].cp * 1;
            this.data.players[1].maxCp = this.data.players[1].cp
            this.data.players[1].id = this.randomId();
            this.data.players[1].vp = 0;
            tempSecondaries = Object.assign({}, ...this.data.players[1].secondaries.map(secondary => ({[secondary]: 0})));
            players.push({ ...this.data.players[1]});
            players[1].secondaries = { ...tempSecondaries };
            
            this.model.error = [];
            this.postData(players);
        },
        postData(players) {
            var db = firebase.firestore();
            const autoId = this.randomId();
            console.log({
                active: true,
                gameTypeValue: this.data.gameTypeValue,
                map: this.data.map,
                players,
                spectate: true
            });
            db.collection("games").doc(autoId).set({
                active: true,
                gameTypeValue: this.data.gameTypeValue,
                map: this.data.map,
                players,
                spectate: true
            }).then(() => {
                console.log("new game added");
            })
        },
        randomId() {
            return '_' + Math.random().toString(36).substr(2, 20);
        }
    }
};

export { NewGameComponent };