<template>
<SwitchDark />
<Login />
</template>


<script setup name="app">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import SwitchDark from './components/SwitchDark/index.vue'
import Login from './views/Login/index.vue'
import { useGlobalStore } from './store';

const globalStore = useGlobalStore()

const setToken = ()=>{
  globalStore.setToken("asasdas")
}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
