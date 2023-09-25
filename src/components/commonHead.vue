<template>
  <div>
    <CommonChild>
      <template #header="{ title }">
        <h1>这是传给头部的-->{{ title }}</h1>
      </template>
      <template #default="data">
        <div>
          <h1>这是传给默认的-->{{ data.c }}</h1>
          <button>这也是传给默认的-->{{ data.d }}</button>
        </div>
      </template>
      <template #footer="data">
        <button v-for="item in data.arr" :key="item">{{ item }}</button>
        <mark>这是传给尾部的-->{{ data.c }}</mark>
      </template>
    </CommonChild>
  </div>
</template>

<script>
import CommonChild from "./CommonChild.vue";
export default {
  components: {
    CommonChild,
  },
};
</script>

<style lang="scss" scoped></style>
