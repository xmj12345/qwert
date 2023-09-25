<template>
    <div>
        <button @click="changeMsg">修改msg</button>
        {{ msg }}
        {{ reverseMsg }}
    </div>
</template>

<script>
import mixin1 from '@/mixins/mixin1'
    export default {
        data() {
            return {
                msg: '组件自己的数据'
            }
        },
        mixins:[mixin1],
        mounted(){
            console.log(this)
        }
    }
</script>

<style lang="scss" scoped>

</style>