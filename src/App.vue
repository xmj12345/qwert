<template>
    <h1>这是组件视图内容</h1>
    <CommonHead />
</template>
<script>
import CommonHead from "./components/commonHead.vue";
export default {
  name: "App",
  data() {
    return {
      msg: "你好呀",
    };
  },
  components: {
    CommonHead,
  },
};
</script>
<style scoped>
/* @import url('./assets/style.css'); */
h1 {
  color: red;
}
:deep h1 {
  color: blue;
}
</style>
