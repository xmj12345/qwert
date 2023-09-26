<template>
    <h2>这是一个组件</h2>
    <input type="text" :value="modelValue" @input="changeMsg">
</template>

<script>
  export default {
   props:['modelValue'],
    methods: {
      changeMsg(e) {
        this.$emit('update:modelValue',e.target.value)
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>