import CommonNav from './CommonNav.vue'
export default{
    install(app,options){
        // 添加全局方法或属性
        app.config.globalProperties.$aaa = '这是添加的全局属性'
        app.component('CommonNav',CommonNav)
        app.directive('focus',{
            mounted(el){
                el.focus()
            }
        })
        app.provide('a','依赖注入的值')
    }
}