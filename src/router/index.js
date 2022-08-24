import Vue from 'vue'
import Router from 'vue-router'
import PaginaInicial from '@/paginas/PaginaInicial'
import Pokemon from '@/paginas/Pokemon'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PaginaInicial',
      component: PaginaInicial
    },
    {
      path: '/pokemon/:id',
      name: 'pokemons',
      component: Pokemon
    }
  ]
})
