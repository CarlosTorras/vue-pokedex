import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/PokemonList",
      name: "Pokemon",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/PokemonList.vue")
    },
    {
      path: "/AbilitiesList",
      name: "Abilities",
      component: () => import("./views/AbilitiesList.vue")
    },
    {
      path: "/MovesList",
      name: "Moves",
      component: () => import("./views/MovesList.vue")
    },
    {
      path: "/ItemsList",
      name: "Items",
      component: () => import("./views/ItemsList.vue")
    },
    {
      path: "/BerriesList",
      name: "Berries",
      component: () => import("./views/BerriesList")
    },
    {
      path: "/EncountersPage",
      name: "Encounters",
      component: () => import("./views/EncountersPage")
    },
    {
      path: "/Pokemondetail/:id",
      name: "PokemonINdetail",
      component: () => import("./views/Pokemondetail"),
      props: true
    },
    {
      path: "/Chat",
      name: "ChatPage",
      component: () => import("./views/Chat")
    }
  ]
});
