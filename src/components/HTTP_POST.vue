<template lang="">
  <div>
    <h2>Http post lecture 46</h2>
    <form action="" @submit.prevent="submitPost(formData)">
      <div>
        <input
          type="text"
          name="userId"
          id="userId"
          placeholder="enter user id"
          v-model="formData.userId"
        />
      </div>
      <div>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="enter title"
          v-model="formData.title"
        />
      </div>
      <div>
        <input
          type="text"
          name="body"
          id="body"
          placeholder="enter body"
          v-model="formData.body"
        />
      </div>
      <button>Submit</button>
    </form>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: "HTTP_POST",
  data() {
    return {
      formData: {
        userId: "",
        title: "",
        body: "",
      },
    };
  },
  methods:{
      submitPost(post){
          console.log(post);
          axios.post('https://jsonplaceholder.typicode.com/posts',this.formData)
          .then((res)=>{
              console.log(res);
          }).catch((error)=>{
              console.log(error);
          })
      }
  }
};
</script>
<style lang=""></style>
