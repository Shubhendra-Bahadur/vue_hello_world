<template lang="">
  <div>
    consition list rendering lecture no. 15<br /><br />

    <template v-for="name in names" :key="name">
      <h2 v-if="name === 'bruce'">{{ name }}</h2>
    </template>
  </div>
</template>
<script>
export default {
  name: "ConditionalListRendering",
  data() {
    return {
      names: ["bruce", "shubhendra", "diana"],
    };
  },
};
</script>
<style lang=""></style>
