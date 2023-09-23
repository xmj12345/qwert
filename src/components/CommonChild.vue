<template>
   <h2>这是子组件</h2>
   <button @click="noticeMsg">点击通知父组件</button>
</template>

<script>
    export default {
        data() {
            return {
                msg: '子组件的数据'
            }
        },
     methods: {
        noticeMsg() {
            this.$emit('biubiu',this.msg)
        }
     },
    }
</script>

<style  lang="scss" scoped>

</style>