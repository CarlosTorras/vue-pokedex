<template>
  <div @click="goTodetail(pokemon.id)" id="card">
    <div id="cardtext">
      <h2>#{{pokemon.order}} {{pokemon.name}}</h2>
      <p>{{species.genera[2].genus}}</p>
    </div>
    <div class="sprite">
      <img :src="pokemon.sprites.front_default" alt="pokemon front picture" />
    </div>
  </div>
</template>

<script>
export default {
  name: "poke",
  props: {
    pokemon: Object,
    species: Object
  },
  methods: {
    goTodetail() {
      this.$router.push({
        name: "PokemonINdetail",
        params: { id: this.pokemon.id }
      });
    }
  }
};
</script>

<style>
#card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 96px;
  border: 1px solid red;
}
#cardtext {
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>