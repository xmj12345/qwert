<template>
   <h2>这是子组件2</h2>
   {{ msg }}
</template>
<script>
import emitter from '/utils/emitter';
    export default {
        data() {
            return {
                msg: ''
            }
        },
        mounted(){
            emitter.on('biubiu',(msg)=>{
                console.log('我收到了brother',msg)
                this.msg = msg
            })
        }
    }
</script>

<style  lang="scss" scoped>

</style>