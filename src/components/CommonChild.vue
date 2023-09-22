<template>
   <h2>这是子组件</h2>
   {{ title }}
   <hr>
   <button @click="title='只改变了'">修改props</button>
   {{ msg }}
</template>

<script>
    export default {
        // 子组件定义props属性接收父组件传递的自定义属性
        props:['title','msg'],
        mounted(){
            console.log(this)
        }
    }
</script>

<style  lang="scss" scoped>

</style>