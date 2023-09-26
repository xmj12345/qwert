<template>
  <div>
    <ul>
      <li v-for="cate in cates" :key="cate.id">
        <img :src="cate.icon" alt="">
        <p>{{ cate.name }}</p>
      </li>
    </ul>
    <ul>
    <li v-for="item in items" :key="item.id">
        <img :src="item.pic" alt="">
        <p>{{ item.name }}</p>
        <p>价格： {{ item.minPrice }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

  axios.defaults.baseURL="https://api.it120.cc/conner",
  axios.defaults.timeout=4000,
  axios.defaults.headers.token='aaa'
// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    console.log("请求成功拦截器触发", config);
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function (res) {
    console.log("响应成功拦截器触发", res);
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return res;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
  export default {
    data() {
      return {
        cates: [],
        items:[]
      }
    },
    methods: {
      fetchCates() {
        axios.get(
          '/shop/goods/category/all',{
            params:{
            page:1,
            pageNum:10
          },
          }
        ).then(res=>{
          if(res.data.code===0){
            this.cates = res.data.data
          }

        })
      },
      fetchItem(){
        axios.post("/shop/goods/list/v2",{
          a:10,
          b:20
        }).then((res) => {
          if (res.data.code === 0) {
            this.items = res.data.data.result;
          }
        });
      }
    },
    created () {
      this.fetchCates();
      this.fetchItem()
    },
  }
</script>

<style lang="scss" scoped>

</style>