import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    pokeList: [],
    pokemon: [],
    species: [],
    url: "https://pokeapi.co/api/v2/pokemon?offset=30&limit=30"
  },
  mutations: {
    logUser: (state, payload) => (state.user = payload),
    logPokelist: (state, payload) => (state.pokeList = payload),
    logPokemon: (state, payload) => (state.pokemon = payload),
    logSpecies: (state, payload) => (state.speciest = payload),
    logURL: (state, payload) => (state.url = payload),
    logAddPokelist: (state, payload) =>
      (state.pokeList = [...state.pokeList, ...payload])
  },
  actions: {
    getPokelist({ commit }) {
      axios
        .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=30")
        .then(list => {
          console.log(list);
          // this.plist = list.data.results;
          commit("logPokelist", list.data.results);
        })
        .catch(err => {
          console.log(err);
        });
    },
    addPokelist({ state, commit }) {
      axios
        .get(state.url)
        .then(list => {
          console.log(list);
          commit("logAddPokelist", list.data.results);
          commit("logURL", list.data.next);
        })
        .catch(err => {
          console.log(err);
        });
    }
    // getPokemon({commit}){
    //   axios.get("https://pokeapi.co/api/v2/pokemon/" + this.pokename).then(pokemonR=>{
    //     console.log(pokemonR);
    //     // this.pokemon = pokemonR.data;
    //     commit("logPokemon", pokemonR.data)
    //   })
    // },
    // getSpecies({commit}){
    //   axios.get("https://pokeapi.co/api/v2/pokemon-species/" + this.pokename).then(speciesR=>{
    //     console.log(speciesR);
    //     // this.species = speciesR.data;
    //     commit("logSpecies", scpeciesR.data)
    //   })
    // }
    // checkUser:
  },
  getters: {
    seeUser: state => state.user,
    seePokelist: state => state.pokeList,
    seePokemon: state => state.pokemon,
    seeSpecies: state => state.species
  }
});
