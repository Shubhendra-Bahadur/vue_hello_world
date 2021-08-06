<template lang="">
    <div>
        <h2>Http and vue lecture 44</h2>
        <button @click="getPost">Load Post</button>
        <button @click="getComment(1)">Load Post 1 comments</button>
        <ul>
            <li v-for="post in posts">{{post}}</li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios';
import {get} from '../api/index'
export default {
    name:'HTTP_GET',
    data(){
        return{
            posts:[],
            API:axios.create({baseURL:"https://jsonplaceholder.typicode.com"})
        }
    },
    methods: {
        getPost(){
            this.API.get('/posts')
            .then((res)=>{
                this.posts=res.data
            }).catch((error)=>{
                console.log(error);
            })
        },
        async getComment(id){
            const comment=await get(id);
            this.posts=comment.data;
        }
    }
}
</script>
<style lang="">
    
</style>