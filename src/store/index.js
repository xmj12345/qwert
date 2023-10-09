// 初始化 vuex
import {createStore} from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'


// 仓库实例
const store = createStore({
    strict:true,
    state,
    // 存储的是修改state的方法
    mutations,
    getters,
    actions
})
export default store