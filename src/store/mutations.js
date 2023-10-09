export default{
    // 参数1就是state 参数2commit穿的参数
    ADD_COUNT(state,n){
        state.count+=n
    },
    INIT_CATES(state,cates){
        state.cates = cates
    }
}