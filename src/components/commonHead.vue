<template>
  <div>
    <button v-backTop>回到顶部</button>
  </div>
</template>

<script>
export default {
  directives: {
    backTop: {
      mounted(el, { value = 200 }) {
        el.style.display = "none";
        window.onscroll = () => {
          let st =document.documentElement.scrollTop || document.body.scrollTop;
          if (st > value) {
            el.style.display = "block";
          } else {
            el.style.display = "none";
          }
        };
        el.onclick = () => {
          window.scrollTo(0, 0);
        };
      },
      unmounted() {
        window.onscroll = null;
      },
    },
  },
};
</script>

<style scoped>
button {
  position: fixed;
  right: 50px;
  bottom: 100px;
}
</style>
