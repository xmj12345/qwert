<template>
  <div>
    <video-player
    src="/11.mp4"
    poster=""
    controls
    :loop="true"
    :volume="0.6"
  />
  </div>
<CommonNav/>
<input type="text" v-focus>
{{ a }}
</template>
<script>
  export default {
    inject:['a'],
    mounted(){
      console.log(this.$aaa)
    }
  }
</script>

<style lang="scss" scoped>

</style>