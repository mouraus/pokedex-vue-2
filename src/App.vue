<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue-resource@1.5.3"></script>
<script>
export default {
  name: 'App'
}
</script>

<style>
#app{
  background: #262835;
  min-height:auto;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
</style>
