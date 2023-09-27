import { createApp } from 'vue'
import App from './App.vue'
let app = createApp(App)

// app.directive('backTop',{
//     mounted(el,{value=200}){
//        el.style.display = 'none'
//        window.onscroll = ()=>{
//         let st = document.documentElement.scrollTop || document.body.scrollTop
//         if(st>value){
//             el.style.display = 'block'
//         }else{
//             el.style.display = 'none'
//         }
//        }
//        el.onclick = ()=>{
//         window.scrollTo(0,0)
//        }
//     },
//     unmounted(){
//         window.onscroll = null
//         el.onclick = null
//     }
// })  
app.mount('#app')
