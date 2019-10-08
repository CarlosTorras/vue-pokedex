<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <img src="./assets/pokeball-img.png" alt="pokeball" class="pokeball" />
      </router-link>|
      <router-link to="/PokemonList">Pokemon</router-link>|
      <router-link to="/AbilitiesList">Abilities</router-link>|
      <router-link to="/MovesList">Moves</router-link>|
      <router-link to="/BerriesList">Berries</router-link>|
      <router-link to="/ItemsList">Items</router-link>|
      <router-link to="/EncountersPage">Encounters</router-link>|
      <router-link v-if="logged==true" to="/Chat">Chat</router-link>
      <div>
        <v-btn v-if="logged==false" @click="login">Login</v-btn>
        <v-btn v-if="logged==true" @click="logout">Logout</v-btn>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import firebase from "firebase";
import { mapGetters } from "vuex";
export default {
  name: "App",
  data() {
    return {
      logged: false
    };
  },
  methods: {
    login() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(user => {
          console.log(user);
          this.logged = true;
        })
        .catch(err => alert(err));
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(user => {
          this.logged = false;
          console.log("sign-out succesfully!");
          // Sign-out successful.
        })
        .catch(function(error) {
          // An error happened.
        });
    }
  },
  computed: { ...mapGetters(["getUser"]) }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #0e151b;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #0e151b;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.pokeball {
  width: 25px;
  height: 25px;
}

#pokeballgif {
  width: 80%;
  height: auto;
}
</style>
