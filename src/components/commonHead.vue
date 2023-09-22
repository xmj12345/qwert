<template>
        <h1>这是父组件</h1>
        <CommonChild :title="title" msg="这是静态的值"/>
</template>

<script>
import CommonChild from './CommonChild.vue';
    export default {
        data() {
            return {
                title: '这是父组件的数据'
            }
        },
        components:{
            CommonChild
        }
    }
</script>

<style lang="scss" scoped>
    
</style>