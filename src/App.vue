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
    <ComponentProps :name="name" :age="age"/>
    <h2>App component nam- {{names}}</h2>
    <!-- <ProvideInject/> -->
    <!-- <button @click="showPopup=true">Show popup</button> -->
    <!-- <Popup v-show="showPopup" @close="closePopup"/> -->
    <!-- <Input/> -->
    <!-- <Slots content="card content1"/> -->
    <!-- <Slots content="card content2"/> -->
    <!-- <Slots>Card content slot</Slots> -->
    <!-- <Slots><h1>Card content slot</h1></Slots> -->
    <!-- <HTTP_GET/> -->
    <!-- <HTTP_POST/> -->
    
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
import Input from "@/components/Input.vue";
import Slots from "@/components/Slots.vue";
import HTTP_GET from "@/components/HTTP_GET.vue";
import HTTP_POST from "@/components/HTTP_POST.vue";
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
    Popup,
    Input,
    Slots,
    HTTP_GET,
    HTTP_POST
  },
  data() {
    return {
      name:'viswas',
      // age:24,
      // names:"shubhendra Bahadur"
      showPopup:false
    }
  },
  provide() {
    return{
      // UserName:this.names

    }
  },

  methods: {
    closePopup(name){
      this.showPopup=false;
      console.log('name',name)
    }
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
