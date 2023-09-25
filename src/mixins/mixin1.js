export default {
    data(){
        return {
            msg: '混入对象上的数据'
        }
    },
    methods: {
        changeMsg() {
            this.msg = '数据改变了'
        }
    },
    computed:{
        reverseMsg(){
        return  this.msg.split('').reverse().join('')
        }
    }
}