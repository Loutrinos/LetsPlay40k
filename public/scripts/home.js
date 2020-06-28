var db = firebase.firestore();

const HomeComponent = {
    data: () => ({ activeGames: [], user: "", showMessage: false}),
    created() {
        this.getDataFromDB();
    },
    methods: {
        getDataFromDB() {
            db.collection("games").onSnapshot(query => {
                this.activeGameData = [];
                query.docs.map(doc => {
                    const game = doc.data();
                    game.id = doc.id;
                    this.activeGames.push(game);
                });
            });
        },
        login() {
            db.collection("players").where("name", "==", this.$refs.login.value).get().then(query => {
                this.showMessage = false;
                if (query.empty) {
                    this.showMessage = true;
                }

                query.forEach(player => {
                    this.user = player.data().id;
                    localStorage.setItem("user", player.data().id);

                    const userGame = this.activeGames.filter(game => game.players.filter(player => player === user))
                    if (userGame) {
                        this.navigateToGame(userGame.id);
                    }
                });
            });
        },
        navigateToGame(gameId) {
            if (!gameId) {
                return;
            }
            this.router.push({ path: "/active/:id", params: { id: gameId } });
        }
    },
    template: `<div class="main-container">
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