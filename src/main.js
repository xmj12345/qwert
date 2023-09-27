import { createApp } from 'vue'
import App from './App.vue'
let app = createApp(App)
// 自定义全局指令
app.directive('focus',{
    mounted(el,binding){
       el.focus()
    }
})  
app.mount('#app')
