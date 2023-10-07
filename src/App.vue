<template>
  <button @click="enterHome">首页</button>
  <button @click="enterNew">新闻页</button>
  <button @click="enterAbout">关于我们页</button>
  <RouterView />
</template>

<script>
export default {
  methods: {
    enterHome(){
      this.$router.push('/home')
    },
    enterNew(){
      this.$router.push('/new')
    },
    enterAbout(){
      this.$router.replace('/about')
    },
  }
};
</script>

<style lang="scss" scoped></style>
