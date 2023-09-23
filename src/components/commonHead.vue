<template>
        <h1>这是父组件</h1>
        <CommonChild @biubiu="receiveMsg"/>
        {{ msg }}
</template>

<script>
import CommonChild from './CommonChild.vue';
    export default {
        data() {
            return {
                msg: ''
            }
        },
        components:{
            CommonChild
        },
        methods: {
            receiveMsg(msg) {
                this.msg = msg
                console.log('我收到了你的信息')
            }
        },

    }
</script>

<style lang="scss" scoped>
    
</style>