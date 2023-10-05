<template>
    <h1>新闻页</h1>
    <RouterLink to="/new/newSon">新闻子路由</RouterLink>
    <RouterView/>
</template>

<script>

    export default {
        mounted () {
            console.log(this.$route);
        },
    }
</script>

<style lang="scss" scoped>

</style>