<template>
    <div>
        <CommonChild>
            <h1>这是父组件传入的内容</h1>
            <mark>1111</mark>
        </CommonChild>
    </div>
</template>

<script>
import CommonChild from './CommonChild.vue'
    export default {
        components:{
            CommonChild
        }
    }
</script>

<style lang="scss" scoped>

</style>