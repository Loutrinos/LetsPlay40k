var db = firebase.firestore();

const HomeComponent = {
    data: () => ({ activeGames: [], user: "", showMessage: false}),
    created() {
        this.getDataFromDB();
    },
    methods: {
        getDataFromDB() {
            db.collection("games").where("active", "==", true).onSnapshot(query => {
                this.activeGameData = [];
                query.docs.map(doc => {
                    const game = doc.data();
                    game.id = doc.id;
                    this.activeGames.push(game);
                });
            });
        },
        login() {
            this.showMessage = false;
            const userGame = this.activeGames.filter(game => game.players.filter(player => player.name === this.$refs.login.value).length)
            console.log(userGame[0]);
            if (!userGame[0]) {
                this.showMessage = true;
                return;
            }
            localStorage.setItem("user", userGame[0].players.filter(player => player.name === this.$refs.login.value)[0].id);
            this.navigateToGame(userGame[0].id);
        },
        navigateToGame(gameId) {
            if (!gameId) {
                return;
            }
            this.$router.push({ path: `/active/${gameId}` });
        }
    },
    template: `
    <div class="main-container">
    <div class="login">
        <div class="ui segment raised">
            <h1>Login</h1>
            <div class="ui action fluid input">
                <input type="text" placeholder="Enter User's Name" ref="login">
                <button class="ui button" @click=login>Login</button>
            </div>

            <div class="ui negative tiny message" v-if='showMessage'>
                <div class="header">
                    The user does not exist
                </div>
                <p>Please try again!</p>
            </div>

            <div class="ui divider horizontal">or</div>

            <h2>Spectate</h2>
            <div class="ui middle aligned divided list">
                <div class="item" v-for="game in activeGames">
                <div class="right floated content">
                
                <a class="ui button tiny" @click="navigateToGame(game.id)">Enter</a>
                    </div>
                    <div class="middle aligned content"><h3>{{ game.players[0].name }} ({{ game.players[0].vp ? game.players[0].vp : 0 }}) vs {{ game.players[1].name }} ({{ game.players[1].vp ? game.players[1].vp : 0 }})</h3></div>
                </div>
            </div>
        </div>
        
    </div>
    
    </div>`
};

export { HomeComponent };