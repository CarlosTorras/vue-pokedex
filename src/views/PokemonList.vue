<template>
  <div class="about">
    <h1>This is the Pokemon list</h1>
    <pokemoncard v-for="(list,i) in seePokelist" :key="i" :pokename="list.name"></pokemoncard>
  </div>
</template>

<script>
import pokemoncard from "../components/Pokemon";
import axios from "axios";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Pokemonlist",
  data() {
    return {};
  },
  components: {
    pokemoncard
  },
  methods: {
    ...mapActions(["getPokelist", "addPokelist"]),
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          this.addPokelist();
        }
      };
    }
  },
  computed: {
    ...mapGetters(["seePokelist"])
  },
  created() {
    this.getPokelist();
  },
  mounted() {
    this.scroll();
  }
};
</script>

<style>
</style>
