import { createApp } from 'vue'
import App from './App.vue'
import VueVideoPlayer from '@videojs-player/vue'
import 'video.js/dist/video-js.css'
import loading from './plugins/loading'
let app = createApp(App)
app.use(VueVideoPlayer)
app.use(loading)
app.mount('#app')
