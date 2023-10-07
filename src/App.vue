<template>
  <button @click="enterHome">首页</button>
  <button @click="enterNew">新闻页</button>
  <button @click="enterAbout">关于我们页</button>
  <div class="container">
    <router-view v-slot="{ Component }">
      <transition name="an1">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  methods: {
    enterHome() {
      this.$router.push("/home");
    },
    enterNew() {
      this.$router.push("/new");
    },
    enterAbout() {
      this.$router.replace("/about");
    },
  },
};
</script>

<style scoped>
.an1-enter-from {
  transform: translateY(500px);
  opacity: 0;
}
.an1-enter-active {
  transition: all 1s;
}
.container{
  max-width: 800px;
  margin: 50px auto;;
}
</style>
