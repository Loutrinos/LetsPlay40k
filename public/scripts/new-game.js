const NewGameComponent = {
    template: `<div class="main-container">
    <h1>Create a new Game</h1>
    <form class="ui form">
        <h4 class="ui dividing header">First Player</h4>
        <div class="field">
            <label>Player Name</label>
            <input type="text" name="first-player-name" placeholder="Name">
        </div>
        <div class="field">
            <label>Starting Command Points</label>
            <input type="text" name="first-player-name" placeholder="CP">
        </div>
        <h4 class="ui dividing header">Second Player</h4>
        <div class="field">
            <label>Player Name</label>
            <input type="text" name="first-player-name" placeholder="Name">
        </div>
        <div class="field">
            <label>Starting Command Points</label>
            <input type="text" name="first-player-name" placeholder="CP">
        </div>
        <h4 class="ui dividing header"></h4>
        <button class="ui button" type="submit">Submit</button>
    </form>
    </div>`
};

export { NewGameComponent };
