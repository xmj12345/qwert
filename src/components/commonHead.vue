<template>
    <div>
        <h2>组件</h2>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                time: null
            }
        },
        mounted () {
            let time = setInterval(()=>{
                console.log('定时器出发了')
            },1000);
            this.time = time
            window.onscroll = function(){
                console.log('滚动了')
            }
        },
        beforeUnmount(){
            clearInterval(this.time)
            window.onscroll = null
        }
    }
</script>

<style  scoped>

</style>