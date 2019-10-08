<template>
  <div class="contain">
    <div class="firstband">
      <div class="sprite">
        <img :src="pokemon.sprites.front_default" alt="poke image" />
      </div>
      <div class="info">
        <div id="infotitle">
          <h2 class="title">Nº{{pokemon.order}} {{pokemon.name}}</h2>
          <v-divider class="divider" role="presentation"></v-divider>
          <p class="title">The {{species.genera[2].genus}}</p>
        </div>
        <div class="pokeinfo">
          <p>Height: {{pokemon.height}} dm</p>
          <p>Weight: {{pokemon.weight}} hg</p>
          <p>
            Type:
            <v-chip class="chip" small v-for="(type,i) in pokemon.types" :key="i">{{type.type.name}}</v-chip>
          </p>
          <p>Habitat: {{species.habitat.name}}</p>
          <p>
            Ability:
            <v-chip class="chip" small label v-for="(ability,i) in pokeability" :key="i">{{ability}}</v-chip>
          </p>
        </div>
      </div>
    </div>
    <div class="moreinfo">
      <p>{{species.flavor_text_entries[1].flavor_text}}</p>
    </div>
    <div class="stats">
      <barchart :pokemon="pokemon" />
    </div>
    <!-- <div class="moves">
      <div v-for="(move,i) in pokemon.moves" :key="i">{{move.move.name}}</div>
    </div>-->
    <div class="evolutions"></div>
    <!-- <div class="pagesBTNs">
      <router-link :to="'/Pokemondetail/'+pokemon.id">
        <v-btn>Previous</v-btn>
      </router-link>
      <router-link :to="'/Pokemondetail/'+pokemon.id">
        <v-btn>Next</v-btn>
      </router-link>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
import barchart from "../components/BarChart";

export default {
  components: {
    barchart
  },
  name: "inDetail",
  data() {
    return {
      pokeability: [],
      pokemon: {},
      species: {}
    };
  },
  methods: {
    getData() {
      console.log(this.$route.params.id);
      axios
        .all([
          axios.get(
            "https://pokeapi.co/api/v2/pokemon/" + this.$route.params.id
          ),
          axios.get(
            "https://pokeapi.co/api/v2/pokemon-species/" + this.$route.params.id
          )
        ])
        .then(
          axios.spread((pokemonR, speciesR) => {
            console.log(pokemonR);
            this.pokemon = pokemonR.data;
            console.log(speciesR);
            this.species = speciesR.data;
            this.getAbility();
          })
        )
        .catch(err => {
          console.log(err);
        });
      console.log(pokemonR.data.abilities);
    },
    getAbility() {
      for (let i = 0; i < this.pokemon.abilities.length; i++) {
        if (this.pokemon.abilities[i].is_hidden == false) {
          this.pokeability.push(this.pokemon.abilities[i].ability.name);
        }
      }
    },
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style>
.contain {
  display: flex;
  flex-direction: column;
}
.firstband {
  display: flex;
  justify-content: space-around;
  margin: 2%;
}
.sprite {
  align-self: center;
}
.sprite > img {
  height: 150px;
  width: 150px;
}
.divider {
  color: rgb(34, 34, 34);
  padding-top: 2%;
  padding-bottom: 1.5%;
}
.info {
  width: 48%;
}
.title {
  text-align: center;
}
.pokeinfo {
  margin-top: 5%;
  padding: 5%;
  background-color: rgba(48, 168, 215, 0.87);
  border-radius: 4%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.chip {
  margin: 1.25% 2.2%;
}
.moreinfo {
  margin: 2%;
  text-align: justify;
  border-left: 5px solid red;
  border-right: 5px solid red;
  border-top: 1.4px solid rgb(255, 71, 71);
  border-bottom: 1.4px solid rgb(255, 71, 71);
  padding: 2.5%;
  border-radius: 2%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.stats {
  margin: 5% 3%;
  /* background-color: rgba(164, 164, 164, 0.527); */
  border-radius: 2%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.moves {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
}
</style>