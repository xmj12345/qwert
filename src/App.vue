<template>
  <!-- 定义路由组件出口 -->
  <RouterLink to="/">首页</RouterLink>
  <!-- name实现跳转 -->
  <RouterLink :to="{name:'new'}">新闻页</RouterLink>
  <RouterLink :to="{name:'about'}">关于我们页</RouterLink>
<RouterView />
</template>

<script>
  export default {  }
</script>

<style lang="scss" scoped>

</style>