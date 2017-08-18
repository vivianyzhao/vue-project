<template>
  <div id="app">
    <h1>Test {{ name }}</h1>
    <!--img src="./assets/logo.png"-->
    <label>Title text: <input v-model="name" placehold="change title here"></label>
    <app-menu></app-menu>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
export default {
  name: 'app',
  data () {
    return {
      name: 'Hello world'
    }
  },
  components: {'app-menu': Menu}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.main {

}
</style>
