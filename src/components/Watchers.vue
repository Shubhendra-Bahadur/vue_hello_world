<template lang="">
  <div>
    watcher lecture no. 27-28 <br /><br />

    <h2>VColume tracker(0-20)</h2>
    <h2>current volument - {{ volume }}</h2>
    <div>
      <button @click="volume += 2">Increase</button>
      <button @click="volume -= 2">Decrease</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Watchers",
  data() {
    return {
      volume: 0,
    };
  },
  methods: {},
  computed: {},
  watch:{
      volume(newValue,oldValue) {
          if(newValue===16 && newValue>oldValue){
              alert('volume too high');
          }
      }
  }
};
</script>
<style lang=""></style>
