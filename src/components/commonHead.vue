<template>
        <h1>这是父组件</h1>
        <CommonChild :title="title" msg="为什么传不上去"/>
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