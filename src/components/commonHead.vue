<template>
  <button @click="isShow = !isShow">
    {{ isShow ? "点击隐藏" : "点击显示" }}
  </button>
  <Transition name="ani1">
    <div class="box" v-if="isShow"></div>
  </Transition>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
.box {
  width: 200px;
  height: 200px;
  background-color: skyblue;
  margin: 20px auto;
}
/* 定义入场初始状态 */
.ani1-enter-from{
  transform: translateX(-500px) rotate(360deg) scale(0.1);
  opacity: 0;
}
  /* 定义出厂最终状态 */
.ani1-leave-to{
  transform: translateY(500px) rotate(360deg) scale(0.1);
  opacity: 0;
}
.ani1-enter-active,
.ani1-leave-active{
  transition: all 1s;
}

</style>
