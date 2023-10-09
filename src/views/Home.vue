<template>
    <h1>首页</h1>
    <button @click="addCount">count+</button>
    {{ $store.state.count }}
    <hr>
    {{ $store.getters.doubleCount }}
</template>

<script>

    export default {
        methods: {
            addCount() {
                this.$store.commit('ADD_COUNT',5)
            }
        },
        mounted () {
            console.log(this.$store);;
        },
    }
</script>

<style lang="scss" scoped>

</style>