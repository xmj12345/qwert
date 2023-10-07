<template>
    <h1>关于我们页</h1>
</template>

<script>
    export default {
        beforeRouteEnter(to,from,next){
            if(confirm('年满18周岁了吗')){
                next()
            }
            // next(vm=>{
            //     console.log(vm)
            // })
        },
        beforeRouteLeave(to,from){
           return confirm('确定要离开吗')
        }
    }
</script>

<style lang="scss" scoped>

</style>