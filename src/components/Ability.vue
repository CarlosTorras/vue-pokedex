<template>
  <div id="card">
    <div id="cardtext">
      <h2>{{abilities.name}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "poke",
  props: {
    abilities: Object
  }
};
</script>

<style>
</style>