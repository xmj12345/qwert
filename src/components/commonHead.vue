<template>
        <h1>这是父组件</h1>
        <CommonChild :a="10" b="20" c="" e="小红红"/>
</template>

<script>
import CommonChild from './CommonChild.vue';
    export default {
        components:{
            CommonChild
        }
    }
</script>

<style lang="scss" scoped>
    
</style>