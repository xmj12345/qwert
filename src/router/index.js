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
        meta: {
            transition: 'slideLeft'
          },
        component:HomeVue
    },
    {
        path:'/new',
        name:'new',
        meta: {
            transition: 'slideBottom'
          },
        component:NewVue,
     
    },
    {
        path:'/about',
        name:'about',
        meta:{
            needLogin:true,
            transition: 'slideRight'
        },
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
    if(to.path === '/login' && isLogin()){
        next('/home')
    }else if(to.meta.needLogin){
        if(isLogin()){
            next()
        }else{
            next({
                path:'/login',
                query:{redirect:to.path}
            })
        }
    }else{
        next()
    }
})
// vue实例 需要使用这个插件
export default router