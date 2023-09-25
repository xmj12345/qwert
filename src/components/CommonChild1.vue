<template>
    <div>
        <h2>子组件1</h2>
        <input type="text" v-model="inputText">
    </div>
</template>

<script>
    export default {
        name:'CommonChild1',
        data() {
            return {
                inputText: ''
            }
        },
        mounted(){
            console.log('子组件1初始化')
        },
        unmounted(){
            console.log('组件1卸载')
        }
    }
</script>

<style lang="scss" scoped>

</style>