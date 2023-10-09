<template>
    <h1>首页</h1>
    <button @click="ADD_COUNT(10)">count+</button>
    {{ count }}
    <hr>
    {{doubleCount }}
    <ul>
        <li v-for="cate in cates" :key="cate.id">
            <p>{{ cate.name }}</p>
            <img :src="cate.icon" width='100' alt="">
        </li>
    </ul>
</template>

<script>
import { mapState,mapMutations,mapActions,mapGetters } from 'vuex';
    export default {
        methods: {
            ...mapMutations(['ADD_COUNT']),
            ...mapActions(['FETCH_CATES'])
        },
        mounted () {
            this.FETCH_CATES({page:1,pageSize:10});
        },
        computed:{
            ...mapState(['cates','count']),
            ...mapGetters(['doubleCount'])
        }
        
    }
</script>

<style lang="scss" scoped>

</style>