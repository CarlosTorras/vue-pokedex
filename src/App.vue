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
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
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
