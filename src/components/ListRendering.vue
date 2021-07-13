<template lang="">
  <div class="border-bottom">
    List Rendering lector no.13-14
    <br />

    <h2 v-for="(name, index) in names" :key="name">{{ index }} {{ name }}</h2>

    <h2 v-for="(name_obj, index) in names_obj" :key="name_obj.name" >
      {{ index }} {{ name_obj.name }} {{ name_obj.age }} {{ name_obj.country }}
    </h2>

    <div v-for="alpha in alphas">
      <h2 style="display: inline-block">{{ alpha.name }}=></h2>
      <h2 v-for="follow in alpha.follow" style="display: inline-block">
        {{ follow }},
      </h2>
    </div>

    <h2 v-for="(value,key,index) in myInfo" :key="value" >
      {{index }} {{key }} {{value }}
    </h2>
  </div>
</template>
<script>
export default {
  name: "ListRendering",
  data() {
    return {
      names: ["bruce", "shubhendra", "diana"],

      names_obj: [
        {
          name: "shubhendra",
          age: "24",
          country: "india",
        },
        {
          name: "Ravi",
          age: "25",
          country: "America",
        },
        {
          name: "Sunny",
          age: "26",
          country: "Africa",
        },
      ],

      alphas: [
        {
          name: "a",
          follow: ["b", "c"],
        },
        {
          name: "d",
          follow: ["e", "f"],
        },
        {
          name: "g",
          follow: ["h", "i"],
        },
      ],

      myInfo: {
        name: "shubhendra",
        skill: "react",
        exp: "1 year",
      },
    };
  },
};
</script>
<style lang=""></style>
