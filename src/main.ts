import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PhosphorIcons from '@phosphor-icons/vue'
import { MotionPlugin } from '../node_modules/@vueuse/motion/dist'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PhosphorIcons)
app.use(MotionPlugin)
app.mount('#app')
