<template lang="">
    <div>
        custom component Event lecture 34  <br/><br/>
        <h2>This is popup</h2>
        <input type="text" v-model="name">
        <button @click="$emit('close',name)">Close Button</button>
    </div>
</template>
<script>
export default {
    name:"Popup",
    emits:{
        close:(name)=>{
            if(!name){
                return false;
            }else{
                return true;
            }
        }
    },
    data() {
        return {
            name:''
        }
    },
}
</script>
<style lang="">
    
</style>