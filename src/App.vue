<template>
  <button @click="enterHome">首页</button>
  <button @click="enterNew">新闻页</button>
  <button @click="enterAbout">关于我们页</button>
  <div class="container">
    <router-view v-slot="{ Component }">
      <transition :name='$route.meta.transition'>
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
.slideLeft-enter-from {
  transform: translateX(-500px);
  opacity: 0;
}
.slideBottom-enter-from {
  transform: translateY(500px);
  opacity: 0;
}
.slideRight-enter-from {
  transform: translateX(500px);
  opacity: 0;
}
.slideLeft-enter-active,
.slideBottom-enter-active,
.slideRight-enter-active {
  transition: all 500ms;
}
.container{
  max-width: 800px;
  margin: 50px auto;;
}
</style>
