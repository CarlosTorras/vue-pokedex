<template>
  <div>
    <h1>This is the Abilities list</h1>
    <abilitycard :abilities="abilities" />
  </div>
</template>

<script>
import abilitycard from "../components/Ability";
export default {
  name: "Abilitieslist",
  data() {
    return {
      abilities: {
        name: "stench",
        url: "https://pokeapi.co/api/v2/ability/1/"
      }
    };
  },
  components: {
    abilitycard
  }
};
</script>

<style>
</style>