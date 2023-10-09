// 初始化 vuex
import {createStore} from 'vuex'
// 仓库实例
const store = createStore({
    strict:true,
    state:{
        count:1
    },
    // 存储的是修改state的方法
    mutations:{
        // 参数1就是state 参数2commit穿的参数
        ADD_COUNT(state,n){
            state.count+=n
        }
    },
    getters:{
        doubleCount(state){
            return state.count*2
        }
    }
})
export default store