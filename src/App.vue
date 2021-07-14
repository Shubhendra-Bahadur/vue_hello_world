<template>
  <div>
    <!-- <FirstClass /> -->
    <!-- <ConditionalRendering /> -->
    <!-- <ListRendering /> -->
    <!-- <ConditionalListRendering/> -->
    <!-- <MethodsInVue/> -->
    <!-- <FormHandling/> -->
    <!-- <ComputedProperty/> -->
    <!-- <Watchers/> -->
    <!-- <ComponentProps :name="name" :age="age"/> -->
    <!-- <h2>App component name- {{names}}</h2>
    <ProvideInject/> -->
    <Popup/>
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
import ComputedProperty from "@/components/ComputedProperty.vue";
import Watchers from "@/components/Watchers.vue";
import ComponentProps from "@/components/ComponentProps.vue";
import ProvideInject from "@/components/ProvideInject.vue";
import Popup from "@/components/Popup.vue";
export default {
  name: "App",
  components: {
    FirstClass,
    ConditionalRendering,
    ListRendering,
    ConditionalListRendering,
    MethodsInVue,
    FormHandling,
    ComputedProperty,
    Watchers,
    ComponentProps,
    ProvideInject,
    Popup
  },
  data() {
    return {
      // name:'viswas',
      // age:24,
      // names:"shubhendra Bahadur"
    }
  },
  provide() {
    return{
      // UserName:this.names

    }
  }
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
