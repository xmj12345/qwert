import { createApp } from 'vue'
import App from './App.vue'

let app = createApp(App)
// 应用依赖注入
app.provide('c','哈哈')
app.mount('#app')
