<template>
    <h1>新闻页</h1>
    {{ $store.state.count }}
    <hr>
    {{ $store.getters.doubleCount }}
</template>

<script>

    export default { }
</script>

<style lang="scss" scoped>

</style>