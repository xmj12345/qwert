<template>
    <h1>新闻页</h1>
</template>

<script>

    export default {
        // beforeRouteUpdate(to,from){
        //     console.log(to,'to')
        //     console.log(from,'from')
        // }
        watch:{
            $route(to,from){
                console.log(to)
                console.log(from)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>