<template>
  <router-link v-if="loaded" class="link" :to="'/Pokemondetail/'+pokemon.id">
    <div id="card" :class="pokemon.types[0].type.name">
      <div id="cardtext">
        <h2>#{{pokemon.id}} {{pokemon.name}}</h2>
        <p>{{species.genera[2].genus}}</p>
      </div>
      <div class="cardsprite">
        <img :src="pokemon.sprites.front_default" alt="pokemon front picture" />
      </div>
    </div>
  </router-link>
</template>

<script>
import axios from "axios";
export default {
  name: "poke",
  data() {
    return {
      pokemon: {},
      species: {},
      loaded: false
    };
  },
  props: {
    pokename: String
  },
  methods: {
    getData() {
      axios
        .all([
          axios.get("https://pokeapi.co/api/v2/pokemon/" + this.pokename),
          axios.get(
            "https://pokeapi.co/api/v2/pokemon-species/" + this.pokename
          )
        ])
        .then(
          axios.spread((pokemonR, speciesR) => {
            console.log(pokemonR);
            this.pokemon = pokemonR.data;
            console.log(speciesR);
            this.species = speciesR.data;
            this.loaded = true;
          })
        )
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style>
.link {
  text-decoration: none;
}

#card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 96px;
  border-radius: 2.5% 20% 20% 2.5%;
  text-decoration: none;
  margin: 5% 2%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
#cardtext {
  height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 8%;
  color: rgb(34, 34, 34);
}

/* Background colors */
.cardsprite {
  height: 96px;
  background-color: white;
  border-left: 5px solid white;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
}
/* Simple bckgroundcolors */
.poison {
  background-color: rgb(160, 64, 160);
}
.fire {
  background-color: rgb(240, 128, 48);
}
.water {
  background-color: rgb(104, 144, 240);
}
.normal {
  background-color: rgb(168, 168, 120);
}
.fighting {
  background-color: rgb(192, 48, 40);
}
.flying {
  background-color: rgb(168, 144, 240);
}
.grass {
  background-color: rgb(120, 200, 80);
}
.poison {
  background-color: rgb(160, 64, 160);
}
.electric {
  background-color: rgb(248, 208, 48);
}
.ground {
  background-color: rgb(224, 192, 104);
}
.psychic {
  background-color: rgb(248, 88, 136);
}
.rock {
  background-color: rgb(184, 160, 56);
}
.ice {
  background-color: rgb(152, 216, 216);
}
.bug {
  background-color: rgb(168, 184, 32);
}
.dragon {
  background-color: rgb(112, 56, 248);
}
.ghost {
  background-color: rgb(112, 56, 248);
}
.dark {
  background-color: rgb(112, 88, 72);
}
.steel {
  background-color: rgb(184, 184, 208);
}
.fairy {
  background-color: rgb(238, 153, 172);
}
</style>