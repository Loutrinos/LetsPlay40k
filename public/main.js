import { HomeComponent } from "./components/home/home.js";
import { NewGameComponent } from "./components/new-game/new-game.js";

const routes = [
  { path: '/', component: HomeComponent },
  { path: '/new-game', component: NewGameComponent }
]

const router = new VueRouter({routes})
const app = new Vue({
  router
}).$mount('#app');

var db = firebase.firestore();

/**
 * Ideas
 * 
 * 1. Check if user is logged in and included in a game and prompt him to go to the wizard
 * 
 */