<template>
  <div class="swiper banner">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="bannerImg in banners"
        :key="bannerImg.id"
      >
        <img :src="bannerImg.picUrl" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/swiper-bundle.css";
import Swiper from "swiper";
import axios from "axios";
export default {
  data() {
    return {
      swiper: null,
      banners: [],
    };
  },
  methods: {
    initSwiper() {
      let mySwiper = new Swiper(".banner", {
        autoplay: true, //可选选项，自动滑动
        loop: true,
      });
      this.swiper = mySwiper;
    },
    fetchBanners() {
      axios.get("https://api.it120.cc/conner/banner/list").then((res) => {
        console.log(res);
        if (res.data.code === 0) {
          this.banners = res.data.data;
          this.$nextTick(() => {
            this.initSwiper();
          });
        }
      });
    },
  },
  mounted() {
    this.fetchBanners();
  },
};
</script>

<style scoped>
.banner {
  width: 600px;
  height: 400px;
  border: 1px solid black;
  margin: 0 auto;
  .swiper-slide {
    width: 600px;
    height: 400px;
    background-color: skyblue;
  }
}
img {
  width: 600px;
  height: 400px;
}
</style>
