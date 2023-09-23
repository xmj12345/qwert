<template>
        <CommonChild ref="child"/>
        <button ref="btn">按钮</button>
</template>
<script>
import CommonChild from './CommonChild.vue';
    export default {
        mounted () {
            console.log(this.$refs)
        },
        components:{
            CommonChild,
        }
    }
</script>

<style lang="scss" scoped>
    
</style>