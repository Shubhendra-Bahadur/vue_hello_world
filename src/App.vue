<template>
  <div>
    <FirstClass/>
    <ConditionalRendering/>
  </div>
</template>

<script>
// @ is an alias to /src
import FirstClass from '@/components/FirstClass.vue'
import ConditionalRendering from '@/components/ConditionalRendering.vue'
export default {
  name: 'App',
  components:{
    FirstClass,
    ConditionalRendering
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
