<template>
    <h1>子组件头部</h1>
    <slot :a="a" :b="b"></slot>
    <h1>子组件尾部</h1>
</template>

<script>
    export default {
        data() {
            return {
                a:'子组件数据a',
                b:'子组件数据b'
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>