<template>
  <button @click="index++">
    {{ index % 3 }}
  </button>
  <!-- out-in 先出后入 -->
  <Transition name="ani1" mode="out-in">
    <div class="box1" v-if="index % 3 ===0"></div>
    <div class="box2" v-else-if="index % 3 ===1"></div>
    <div class="box3" v-else></div>
  </Transition>
</template>

<script>
export default {
  data() {
    return {
      index:0
    };
  },
};
</script>

<style scoped>
.box1 {
  width: 200px;
  height: 200px;
  background-color: skyblue;
}
.box2 {
  width: 200px;
  height: 200px;
  background-color:palegoldenrod;
}
.box3 {
  width: 200px;
  height: 200px;
  background-color: pink;
}
/* 定义入场初始状态 */
.ani1-enter-from {
  transform: translateX(-500px) rotate(360deg) scale(0.1);
  opacity: 0;
}
/* 定义出场最终状态 */
.ani1-leave-to {
  transform: translateY(500px) rotate(360deg) scale(0.1);
  opacity: 0;
}
.ani1-enter-active,
.ani1-leave-active {
  transition: all 1s;
}
</style>
