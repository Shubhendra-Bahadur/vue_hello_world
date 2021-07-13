<template>
    <div>
        <h2 v-if="num===0">The num is zero</h2>
        <h2 v-else-if="num<0">the num is negative</h2>
        <h2 v-else>The no. is positive</h2>

        <h2>sunny</h2>
        <h2>Shubhendra</h2>
        <h2></h2>
    </div>
</template>
<script>
export default {
    name:"ConditionalRendering",
    data() {
        return {
            num:1,
        }
    },
}
</script>
<style lang="">
    
</style>