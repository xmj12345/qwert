import { createApp } from 'vue'
import App from './App.vue'
import axios from './utils/util'
let app = createApp(App)
// 添加全局属性和方法
app.config.globalProperties.$aaa = 2
app.config.globalProperties.$request = axios
app.mount('#app')
