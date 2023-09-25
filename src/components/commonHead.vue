<template>
    <div>
        <CommonChild>
            <template #header>
                <h1>这是传给头部的</h1>
            </template>
            <div>
                <h1>这是传给默认的</h1>
                <button>这也是传给默认的</button>
            </div>
                
            <template #footer>
                <mark>这是传给尾部的</mark>
            </template>
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