<template>
    <div>
        <h1>父组件</h1>
        <label for="CommonChild1">组件1</label>
        <input type="radio" value="CommonChild1" id="CommonChild1" v-model="componentName">
        <label for="CommonChild2">组件2</label>
        <input type="radio" value="CommonChild2" id="CommonChild2" v-model="componentName">
        <hr>
        <component :is="componentName"></component>
    </div>
</template>

<script>
    import CommonChild1 from './CommonChild1.vue';
    import CommonChild2 from './CommonChild2.vue';
    export default {
        data() {
            return {
                componentName: 'CommonChild1'
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