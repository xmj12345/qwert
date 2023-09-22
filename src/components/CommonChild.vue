<template>
   <h2>这是子组件</h2>
   {{ c }}
   <hr>
   {{ d }}
   <hr>
   {{ e }}
</template>

<script>
    export default {
       props:{
        // 常见的数据类型校验
        a:Number,
        // 检验多个类型
        b:[Number,String],
        c:{
            type:Array,
            required:true
        },
        // 默认值不传，我有子分支
        d:{
            type:String,
            default:'这是默认值'
        },
        // 自定义校验规则  validate validator 校验器 校验函数  
        e:{
            validator(value){
                return value === '小红'
            }
        }
       }
    }
</script>

<style  lang="scss" scoped>

</style>