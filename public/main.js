import { NewGameComponent } from "./scripts/new-game.js";
import { ActiveGameComponent } from "./scripts/active-game.js";

const routes = [
  { path: '/new', component: NewGameComponent },
  { path: '/active', component: ActiveGameComponent }
]

const router = new VueRouter({routes})
const app = new Vue({
  router
}).$mount('#app')