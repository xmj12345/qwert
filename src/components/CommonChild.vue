<template>
  <slot name="header" :title="a"></slot>
  <slot :c="c" :d="d"></slot>
  <slot name="footer" :c="c" :arr="b"></slot>
</template>

<script>
export default {
  data() {
    return {
      a: "数据a",
      b: [1, 2, 3, 4],
      c: "数据c",
      d: "数据d",
    };
  },
};
</script>

<style lang="scss" scoped></style>
