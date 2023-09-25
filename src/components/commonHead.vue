<template>
  <div class="a">
    <div class="b">
      <button @click="showModal">显示modal</button>
      <Teleport to="body">
        <div class="mask" v-if="isShow" @click.self="hideModal">
        <div class="container">这是内容</div>
      </div>
      </Teleport>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    showModal() {
      this.isShow = true;
    },
    hideModal() {
      this.isShow = false;
    },
  },
};
</script>

<style scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  width: 40%;
  height: 40%;
  background-color: #fff;
}
</style>
