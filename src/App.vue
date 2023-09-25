<template>
  <keep-alive>
    <CommonHead v-if="isShow"/>
  </keep-alive>
  
  <button @click="isShow=!isShow">{{ isShow? '隐藏':'显示' }}</button>
</template>

<script>
import CommonHead from './components/CommonHead.vue'
export default {
  data() {
    return {
      isShow: true
    }
  },
  components: {
    CommonHead
  }
}
</script>
