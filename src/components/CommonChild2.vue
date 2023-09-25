<template>
    <div>
        <h2>子组件2</h2>
        <input type="text" v-model="inputText">
    </div>
</template>

<script>
    export default {
        name:'CommonChild2',
        data() {
            return {
                inputText: ''
            }
        },
        mounted(){
            console.log('子组件2初始化')
        },
        unmounted(){
            console.log('组件2卸载')
        }
        
    }
</script>

<style lang="scss" scoped>

</style>