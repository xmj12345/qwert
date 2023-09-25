<template>
    <div>
        <CommonChild v-slot="data">
          <h3>父组件传入的 {{ data.a }}</h3>
          <h4>也是父组件传入的 {{ data.b }}</h4>
        </CommonChild>
    </div>
</template>

<script>
import CommonChild from './CommonChild.vue'
    export default {
        components:{
            CommonChild
        }
    }
</script>

<style lang="scss" scoped>

</style>