<template>
  <div class="border-bottom">
    Conditional rendering lecture no. 11-12
    <h2 v-if="num === 0">The num is zero</h2>
    <h2 v-else-if="num < 0">the num is negative</h2>
    <h2 v-else>The no. is positive</h2>

    <template v-if="display">
      <h2>sunny</h2>
      <h2>Shubhendra</h2>
      <h2>hello</h2>
    </template>

    <h2 v-show="display">using v-show</h2>
  </div>
</template>
<script>
export default {
  name: "ConditionalRendering",
  data() {
    return {
      num: 1,
      display: false,
    };
  },
};
</script>
<style lang=""></style>
