<template lang="">
    <div>
        ComputedProperty lecture 23-26 <br><br>

        <h2>Fullname={{first}} {{last}}</h2>
        <h2>computed Fullname= {{fullName}}</h2>
        <button @click="changeFullName">change name</button>

        <template v-for="item in items" :key="item.id">
            <h2 v-if="item.price>100">{{item.title}} {{item.price}}</h2>
        </template>

        <template v-for="item in getExpensiveItem" :key="item.id">
            <h2 v-if="item.price>100">computed Items-{{item.title}} {{item.price}}</h2>
        </template>


    </div>
</template>
<script>
export default {
    name:"ComputedProperty",
    data() {
        return {
            first:"sunny",
            last:"sri",
            items:[{
                id:1,
                title:'tv',
                price:100
            },
            {
                id:2,
                title:'ac',
                price:200
            },
            {
                id:3,
                title:'oven',
                price:300
            }]
        }
        
    },
    methods: {
        changeFullName(){
            this.fullName ='clark kent'
        }
    },
    computed:{
        fullName(){
            return `${this.first} ${this.last}`
        },

        getExpensiveItem(){
            return this.items.filter(item=>item.price>100);
        },
        fullName:{
            get(){
                return `${this.first} ${this.last}`
            },
            set(value){
                const names=value.split(' ');
                this.first=names[0],
                this.last=names[1]
            }
        }
    }
}
</script>
<style >
    
</style>