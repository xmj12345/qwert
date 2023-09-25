<template>
    <div>
        <input type="text" v-model="inputText">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                inputText: '',
                timer :null
            }
        },
        mounted () {
            console.log('组件初始化');
        },
        unmounted(){
            console.log('组件卸载')
        },
        activated(){
            let timer = setInterval(() => {
                console.log(111)
            }, 1000);
            this.timer = timer
            console.log('组件激活或再次使用----activated')
        },
        deactivated(){
            console.log('组件停用')
            clearInterval(this.timer)
        }
    }
</script>

<style lang="scss" scoped>

</style>