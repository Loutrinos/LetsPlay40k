import { NewGameComponent } from "./scripts/new-game.js";
import { HomeComponent } from "./scripts/home.js";
import { ActiveGameComponent } from "./scripts/active-game.js";

const routes = [
  { path: '/new', component: NewGameComponent },
  { path: '/home', component: HomeComponent },
  { path: '/active/:id', component: ActiveGameComponent }
]

const router = new VueRouter({routes})
const app = new Vue({
  router
}).$mount('#app')