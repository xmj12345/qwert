// 初始化 vuex
import {createStore} from 'vuex'
import request from '@/utils/request'

// 仓库实例
const store = createStore({
    strict:true,
    state:{
        count:1,
        cates:[]
    },
    // 存储的是修改state的方法
    mutations:{
        // 参数1就是state 参数2commit穿的参数
        ADD_COUNT(state,n){
            state.count+=n
        },
        INIT_CATES(state,cates){
            state.cates = cates
        }
    },
    getters:{
        doubleCount(state){
            return state.count*2
        }
    },
    actions:{
        FETCH_CATES(context,params){
            request.get('/cms/category/list',{params}).then(res=>{
                console.log(res);
                if(res.data.code === 0){
                    context.commit('INIT_CATES',res.data.data)
                }
            })
        }
    }
})
export default store