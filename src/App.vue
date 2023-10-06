<template>
  <button @click="enterHome">首页</button>
  <button @click="enterNew">新闻页</button>
  <button @click="enterAbout">关于我们页</button>
  <button @click="$router.go(0)">刷新</button>
  <button @click="addRouter">动态添加</button>
  <button @click="$router.push('/join')">跳转过去</button>
  <RouterView />
</template>

<script>
import JoinUs from '@/views/JoinUs.vue'
export default {
  methods: {
    enterHome(){
      this.$router.push('/home')
    },
    enterNew(){
      this.$router.push({
        path:'/new',
        query:{
          id:10
        }
      })
    },
    enterAbout(){
      this.$router.replace('/about')
    },
    addRouter(){
      // 动态添加父路由
    //  this.$router.addRoute(
    //   {
    //     path:'/join',
    //     component:JoinUs,
    //     name:'join'
    //   }
    //  )
    // }
    // 添加子路由
    this.$router.addRoute('home',
      {
        path:'/join',
        component:JoinUs,
        name:'join'
      }
     )
    }
  },
  mounted () {
    console.log(this.$route);
  },
};
</script>

<style lang="scss" scoped></style>
