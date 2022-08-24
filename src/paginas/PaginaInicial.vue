<template>
  <div class="pagina-inicial">
    <header>
      <img class="logo" src="../assets/logo-pokedex.svg" alt="logo">
      <form>
       <input v-model="valorInput" type="text">
       <i><img src="../assets/icone-procurar.svg" alt="icone"></i>
      </form>
    </header>
    <Card :valorInput="valorInput"></Card>
    <!-- <div v-if="pokemons" class="lista-card">
  <div  v-for="pokemon in pokemonsProcurados " :key="pokemon.name" class="card">
    <div class="pokemon-info">
      <h1>{{pokemon.name}}</h1>
    </div>
     <div class="pokemon">
        <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getId(pokemon.url)}.png`" alt="pokemon"/>
      </div>
  </div>
  </div> -->
  </div>
</template>

<script>
import Card from '../components/Card.vue'
export default {
  name: 'PaginaInicial',
  data () {
    return {
      valorInput: '',
      pokemons: []
    }
  },
  components: { Card }
}
</script>

<style scoped>
header{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagina-inicial{
  display: flex;
  flex-direction: column;
  max-width: 600px;
  min-height: 100vh;
  margin: 0 auto;
}
.logo{
width: 180px;
height: 50px;
}
form{
  /* background: #FFFFFF33; */
  background: hsla(0, 0%, 100%, 0.20);
  border: none;
  border-radius: 10px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
input{
  background: none;
  border: none;
  border-radius: 10px;
  color:white;
  outline:none;
  width: 90%;
  height: 50px;
}
</style>
