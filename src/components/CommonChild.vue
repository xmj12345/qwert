<template>
   <h2>这是子组件1</h2>
   <button @click="noticeMsg">点击兄弟组件通信</button>
</template>

<script>

import emitter from '/utils/emitter';
    export default {
        data() {
            return {
                msg: '子组件1的数据'
            }
        },
     methods: {
        noticeMsg() {
            emitter.emit('biubiu',this.msg)
        }
     },
    }
</script>

<style  lang="scss" scoped>

</style>