<template>
    <h1>首页</h1>
    <button @click="addCount">count+</button>
    {{ $store.state.count }}
    <hr>
    {{ $store.getters.doubleCount }}
    <ul>
        <li v-for="cate in $store.state.cates" :key="cate.id">
            <p>{{ cate.name }}</p>
            <img :src="cate.icon" width='100' alt="">
        </li>
    </ul>
</template>

<script>
    export default {
        methods: {
            addCount() {
                this.$store.commit('ADD_COUNT',5)
            }
        },
        mounted () {
            console.log(this.$store);
            this.$store.dispatch('FETCH_CATES',{
                pageNo:1,
                pageSize:10
            })
        },
    }
</script>

<style lang="scss" scoped>

</style>