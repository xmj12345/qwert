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
  export default {
    data() {
      return {
        cates: [],
        items:[]
      }
    },
    methods: {
      fetchCates() {
        this.$request.get(
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
        this.$request.post("/shop/goods/list/v2",{
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