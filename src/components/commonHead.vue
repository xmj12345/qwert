<template>
    <div>
        <h1>父组件</h1>
        <hr>
        <button @click="isShow = !isShow">{{ isShow?'隐藏':'显示' }}</button>
        <KeepAlive :include="['CommonChild1','CommonChild2']">
            <component :is="componentName" v-if="isShow"></component>
        </KeepAlive>
        
    </div>
</template>

<script>
    import CommonChild1 from './CommonChild1.vue';
    import CommonChild2 from './CommonChild2.vue';
    export default {
        data() {
            return {
                isShow:true,
                componentName: 'CommonChild2'
            }
        },
        components:{
            CommonChild1,
            CommonChild2
        }
    }
</script>

<style lang="scss" scoped>

</style>