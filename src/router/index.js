// 创建路由实例
import { createRouter,createWebHashHistory } from "vue-router";
import HomeVue from '@/views/Home.vue'
import NewVue from '@/views/New.vue'
import AboutVue from '@/views/About.vue'
let routes = [
    {
        path:'/',
        component:HomeVue
    },
    {
        path:'/new',
        component:NewVue
    },
    {
        path:'/about',
        component:AboutVue
    },
]
let router = createRouter({
    // 路由模式  history模式(createWebHistory)
    history:createWebHashHistory(),
    // 定义路由规则
    routes
})
// vue实例 需要使用这个插件
export default router