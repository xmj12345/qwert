<template>
    <CommonHead v-model="msg"/>
    {{ msg }}
</template>

<script>
import CommonHead from './components/CommonHead.vue'
export default {
  data() {
    return {
      msg: ''
    }
  },
  components: {
    CommonHead
  }
}
</script>
