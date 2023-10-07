// 创建路由实例
import { createRouter,createWebHashHistory,createWebHistory } from "vue-router";
import HomeVue from '@/views/Home.vue'
import NewVue from '@/views/New.vue'
import AboutVue from '@/views/About.vue'
import NotFoundVue from '@/views/NotFound.vue'
import LoginVue from '@/views/Login.vue'
import {isLogin} from  '@/utils/user'
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
    {
        path:"/login",
        name:'login',
        component:LoginVue
    },
    // notfound路由
    { path: '/:pathMatch(.*)*', 
     component: NotFoundVue 
    },
]
let router = createRouter({
    // 路由模式（createWebHashHistory）  history模式(createWebHistory)
    history:createWebHashHistory(),
    // 定义路由规则
    routes
})
router.beforeEach((to,from,next)=>{
    // 必须放行的路由 定义路由白名单
    let pass = ['/login','/register']
    if(pass.includes(to.path)){
        next()
    }else if(to.path === '/login' && isLogin()){
        next('/home')
    }else{
        if(isLogin()){
            next()
        }else{
            next({
                path:"/login",
                query:{redirect:to.path}
            })
        }
    }
})
// vue实例 需要使用这个插件
export default router