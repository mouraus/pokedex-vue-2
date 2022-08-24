<template>
  <div v-if="info.name" class="pagina-pokemon">
      <img class="logo" src="../assets/logo-pokedex.svg" alt="logo">
      <h1>{{info.name.toUpperCase()}}</h1>
      <div class="pokemon">
        <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`" alt="pokemon" class="poke-img">
        <div class="descricao-container">
          <h2>Estatisticas</h2>
          <p v-for="status in info.stats" :key="status.stat.name" class="descricao">{{status.stat.name}}<span>{{status.base_stat}}</span></p>
        </div>
        <router-link :to="{name:'PaginaInicial'}">
        Voltar
        </router-link>
</div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Pokemon',
  data () {
    return {
      id: this.$route.params.id,
      info: {nome: 'aaaa'}
    }
  },
  created () {
    this.getPokeInfo()
  },
  methods: {
    getPokeInfo () {
      const url = `https://pokeapi.co/api/v2/pokemon/${this.id}`
      axios.get(url).then((res) => {
        this.info = res.data
      })
    }
  }
}
</script>

<style scoped>
a{
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 90%;
  height: 54px;
  color: white;
  border: none;
  border-radius: 15px;
  outline: none;
  background: red;
  margin: auto auto;
}
h1{
  color: white;
  margin-left: 25%;
  font-style: italic;

}
h2{
    text-decoration-line: underline;
    color: red;
    font-style: italic;
}
.descricao-container{
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 15px ;
}
.descricao{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.pagina-pokemon{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.logo{
  margin-top: 15px;
}
.poke-img{
  width: 200px;
  /* transform: scale(2.0); */
   margin-top: -20%;
}
.pokemon{
  background: white;
  min-height:600px;
  min-width: 600px;
  border-radius: 50px;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  /* gap: 35px; */
}
</style>
