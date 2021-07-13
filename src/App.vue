<template>
  <div>
    <!-- <FirstClass /> -->
    <!-- <ConditionalRendering /> -->
    <!-- <ListRendering /> -->
    <!-- <ConditionalListRendering/> -->
    <!-- <MethodsInVue/> -->
    <FormHandling/>
  </div>
</template>

<script>
// @ is an alias to /src
import FirstClass from "@/components/FirstClass.vue";
import ConditionalRendering from "@/components/ConditionalRendering.vue";
import ListRendering from "@/components/ListRendering.vue";
import ConditionalListRendering from "@/components/ConditionalListRendering.vue";
import MethodsInVue from "@/components/MethodsInVue.vue";
import FormHandling from "@/components/FormHandling.vue";
export default {
  name: "App",
  components: {
    FirstClass,
    ConditionalRendering,
    ListRendering,
    ConditionalListRendering,
    MethodsInVue,
    FormHandling
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.border-bottom {
  border-bottom: 1px solid black;
}
</style>
