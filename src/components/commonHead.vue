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
/* 定义入场动画 */
@keyframes enter {
  0% {
    transform: translateX(-500px) rotate(360deg) scale(0.1);
    opacity: 0;
    background-color: #1bb84d;
  }
  50% {
    transform: translateX(-250px) rotate(360deg) scale(0.5);
    opacity: 0.5;
    background-color: #2c0781;
  }
  100% {
    transform: translateX(0) rotate(0) scale(1);
    opacity: 1;
    background-color: skyblue;
  }
}
/* 定义出场动画 */
@keyframes leave {
  0% {
    transform: translateY(0) rotate(0) scale(1);
    opacity: 1;
    background-color: #1bb84d;
  }
  50% {
    transform: translateY(250px) rotate(360deg) scale(0.5);
    opacity: 0.5;
    background-color: #2c0781;
  }
  100% {
    transform: translateY(500px) rotate(360deg) scale(0.1);
    opacity: 0;
    background-color: skyblue;
  }
}
.ani1-enter-active {
  animation: enter 1s;
}
.ani1-leave-active {
  animation: leave 1s;
}
</style>
