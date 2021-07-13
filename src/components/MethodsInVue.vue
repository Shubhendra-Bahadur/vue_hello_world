<template lang="">
  <div>
    Methods in vue lecture and Event handlingno-16-18 <br /><br />
    {{ 2 + 3 + 5 }}
    {{ 2 + 3 + 11 }}
    <h2>Added no. are- {{ add(2, 4, 100) }}</h2>

    {{ name }}
    <button @click="changeName">Change name by @click</button>
    <button v-on:click="changeName">Change name by V-on</button>
    <button v-on:mouseover="changeName">Change name by mouseover</button>

    <div>
      <h2>Count= {{ count }}</h2>
      <button v-on:click="counterInc">increment</button>
      <button v-on:click="counterDec">decrement</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MethodsInVue",
  data() {
    return {
      name: "shubhendra",
      count: 0,
    };
  },
  methods: {
    add(a, b, c) {
      return a + b + c;
    },

    changeName() {
      this.name = this.name === "sunny" ? "shubhendra" : "sunny";
    },
    counterInc() {
      this.count = this.count + 1;
    },
    counterDec() {
      if (this.count > 0) {
        this.count = this.count - 1;
      }
    },
  },
};
</script>
<style lang=""></style>
