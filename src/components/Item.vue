<template>
  <div id="card">
    <div id="cardtext">
      <h2>{{item.name}}</h2>
      <p>{{item.effect_entries[0].short_effect}}</p>
    </div>
    <div id="sprite">
      <img :src="item.sprites.default" alt="pokemon front picture" />
    </div>
  </div>
</template>

<script>
export default {
  name: "poke",
  props: {
    item: Object
  }
};
</script>

<style>
</style>