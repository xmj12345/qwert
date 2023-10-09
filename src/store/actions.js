import request from '@/utils/request'
export default {
    FETCH_CATES(context, params) {
        request.get('/cms/category/list', { params }).then(res => {
            console.log(res);
            if (res.data.code === 0) {
                context.commit('INIT_CATES', res.data.data)
            }
        })
    }
}