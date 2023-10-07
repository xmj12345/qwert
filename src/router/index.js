// 创建路由实例
import { createRouter,createWebHashHistory,createWebHistory } from "vue-router";
import HomeVue from '@/views/Home.vue'
import NewVue from '@/views/New.vue'
import AboutVue from '@/views/About.vue'
import NotFoundVue from '@/views/NotFound.vue'
let routes = [
    // 重定向
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        name:'home',
        component:HomeVue
    },
    {
        path:'/new',
        name:'new',
        component:NewVue,
     
    },
    {
        path:'/about',
        name:'about',
        component:AboutVue
    },
    // notfound路由
    { path: '/:pathMatch(.*)*', 
     component: NotFoundVue 
    },
]
let router = createRouter({
    // 路由模式（createWebHashHistory）  history模式(createWebHistory)
    history:createWebHistory(),
    // 定义路由规则
    routes
})
// vue实例 需要使用这个插件
export default router