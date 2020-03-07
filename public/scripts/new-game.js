const NewGameComponent = {
    data: () => ({ itc: false }),
    mounted: () => {
        $(".dropdown").dropdown();
        $(".checkbox").checkbox()
    },
    template: `<div class="main-container">
    <h1>Create a new Game</h1>
    <form class="ui equal width form">
        <h4 class="ui dividing header">Game Type</h4>
        <div class="field">
            <div class="ui toggle checkbox">
                <input type="checkbox" id="itc-checkbox" name="itc" v-model="itc">
                <label>ITC</label>
            </div>
        </div>
        <div class="field">
        - choose map
        - choose mission
        </div>
        
        <h4 class="ui dividing header">First Player</h4>
        <div class="field">
            <input type="text" name="first-player-name" placeholder="Name">
        </div>
        <div class="field">
            <input type="text" name="first-command-points" placeholder="CP">
        </div>
        <div class="field">
            <div class="ui selection dropdown">
                <input type="hidden" name="first-faction">
                <i class="dropdown icon"></i>
                <div class="default text">Faction</div>
                <div class="menu">
                    <div class="item" data-value="adeptus-mechanicus">Adeptus Mechanicus</div>
                    <div class="item" data-value="iron-hands">Iron Hands</div>
                    <div class="item" data-value="imperial-knights">Imperial Knights</div>
                    <div class="item" data-value="sisters-of-battle">Sisters of Battle</div>
                </div>
            </div>
        </div>
        <div class="field" v-if="itc">
            <select name="first-itc-secondaries" multiple="" class="ui fluid dropdown">
                <option value="">ITC Secondaries</option>
                <option value="hh">Headhunter</option>
                <option value="ks">Kingslayer</option>
                <option value="mfd">Marked For Death</option>
                <option value="ts">Titan Slayers</option>
                <option value="gb">Gang Busters</option>
                <option value="bgh">Big Game Hunter</option>
                <option value="pyp">Pick Your Poison</option>
                <option value="bb">Butcher’s Bill</option>
                <option value="tr">The Reaper</option>
                <option value="r">Recon</option>
                <option value="bel">Behind Enemy Lines</option>
                <option value="gc">Ground Control</option>
                <option value="koth">King of the Hill</option>
                <option value="e">Engineers</option>
                <option value="os">Old School</option>
            </select>
        </div>
        <h4 class="ui dividing header">Second Player</h4>
        <div class="field">
            <input type="text" name="second-player-name" placeholder="Name">
        </div>
        <div class="field">
            <input type="text" name="second-command-points" placeholder="CP">
        </div>
        <div class="field">
            <div class="ui selection dropdown">
                <input type="hidden" name="second-faction">
                <i class="dropdown icon"></i>
                <div class="default text">Faction</div>
                <div class="menu">
                    <div class="item" data-value="adeptus-mechanicus">Adeptus Mechanicus</div>
                    <div class="item" data-value="iron-hands">Iron Hands</div>
                    <div class="item" data-value="imperial-knights">Imperial Knights</div>
                    <div class="item" data-value="sisters-of-battle">Sisters of Battle</div>
                </div>
            </div>
        </div>
        <div class="field" v-if="itc">
            <select name="first-itc-secondaries" multiple="" class="ui fluid dropdown">
                <option value="">ITC Secondaries</option>
                <option value="hh">Headhunter</option>
                <option value="ks">Kingslayer</option>
                <option value="mfd">Marked For Death</option>
                <option value="ts">Titan Slayers</option>
                <option value="gb">Gang Busters</option>
                <option value="bgh">Big Game Hunter</option>
                <option value="pyp">Pick Your Poison</option>
                <option value="bb">Butcher’s Bill</option>
                <option value="tr">The Reaper</option>
                <option value="r">Recon</option>
                <option value="bel">Behind Enemy Lines</option>
                <option value="gc">Ground Control</option>
                <option value="koth">King of the Hill</option>
                <option value="e">Engineers</option>
                <option value="os">Old School</option>
            </select>
        </div>
        
        <h4 class="ui dividing header"></h4>
        <button class="ui button" type="submit">Submit</button>
    </form>
    </div>`
};

export { NewGameComponent };