<template>
    <h1>首页</h1>
    <button @click="ADD_COUNT(10)">count+</button>
    {{ count }}
    <hr>
    {{ $store.getters.doubleCount }}
    <ul>
        <li v-for="cate in cates" :key="cate.id">
            <p>{{ cate.name }}</p>
            <img :src="cate.icon" width='100' alt="">
        </li>
    </ul>
</template>

<script>
import { mapState,mapMutations } from 'vuex';
    export default {
        methods: {
            ...mapMutations(['ADD_COUNT'])
        },
        mounted () {
            console.log(this.$store);
            this.$store.dispatch('FETCH_CATES',{
                pageNo:1,
                pageSize:10
            })
        },
        computed:{
            ...mapState(['count','cates'])
        }
        
    }
</script>

<style lang="scss" scoped>

</style>