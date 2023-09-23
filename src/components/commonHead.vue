<template>
    <div>
        <ul>
            <li v-for="cate in cates" :key="cate.id">
                <img :src="cate.icon" width="100" alt="">
            <p>{{ cate.name }}</p>
            </li>

        </ul>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                // 1.在data中定义初始值来接收数据
                cates:[]
            }
        },
        methods: {
            // 2. methods中定义方法 发送请求
            fetchCates() {
                axios.get('https://api.it120.cc/conner/shop/goods/category/all').then(res=>{
                    console.log(res)
                    if(res.data.code === 0){
                        this.cates = res.data.data
                    }
                })
            }
        },
        // 3.在初始化 生命周期钩子中调用方法
        created () {
            this.fetchCates()
        },
    }
</script>

<style lang="scss" scoped>

</style>