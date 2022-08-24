<template>
  <div class="lista-card">
  <router-link :to="{ name: 'pokemons' , params: {id: getId(pokemon.url)}}" v-for="pokemon in pokemonsProcurados" :key="pokemon.name" class="card">
    <div class="pokemon-info">
      <h1>{{pokemon.name}}</h1>
    </div>
     <div class="pokemon">
        <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getId(pokemon.url)}.png`" alt="pokemon">
      </div>
  </router-link>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['valorInput'],
  name: 'Card',
  data () {
    return {
      pokemons: []
    }
  },
  computed: {
    pokemonsProcurados: function () {
      return this.pokemons.filter(poke => {
        return poke.name.toLowerCase().includes(this.valorInput.trim().toLowerCase())
      })
    }
  },
  created () {
    this.getPokemons()
  },
  methods: {
    getPokemons () {
      const url = 'https://pokeapi.co/api/v2/pokemon?limit=100'
      axios.get(url).then(({data}) => {
        this.pokemons = data.results
      })
    },
    getId (url) {
      return Number(url.split('/')[6])
    }
  }

}
</script>

<style scoped>
h1{
  font-size: 22px;
}
a{
  text-decoration: none;
  color: black;
  font-family: sans-serif;
  font-style: italic;
}
.lista-card{
  width: 100%;
  height: 100%;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 25px;
}
.card{
  width: 49%;
  height: 157px;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
  cursor: pointer;
}
.pokemon-info{
  display: flex;
  flex-direction: column;
}
.pokemon{
  background-image: url('../assets/bg-pokemon-card.svg');
  width: 110px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;

}
.habilidades{
  display: flex;
  flex-direction: column;
  gap: 5px;
}

span{
  font-size: 10px;
  border-radius: 10px;
  text-align: center;
  background: #EFEFEF;
}
</style>
