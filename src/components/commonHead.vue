<template>
  <div>
    <ul>
      <li v-for="cate in cates" :key="cate.id">
        <img :src="cate.icon" alt="">
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
        cates: []
      }
    },
    methods: {
      fetchCates() {
        axios({
          url:'https://api.it120.cc/conner/shop/goods/category/all',
          method:'get',
          params:{
            page:1,
            pageNum:10
          },
          headers:{
            token:'aaaaaa'
          }
        }).then(res=>{
          console.log(res)
          if(res.data.code===0){
            this.cates = res.data.data
          }

        })
      }
    },
    created () {
      this.fetchCates();
    },
  }
</script>

<style lang="scss" scoped>

</style>