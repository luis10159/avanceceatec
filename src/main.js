import { createApp } from 'vue'
import './scss/_style.scss'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)
app.use(router).use(pinia).mount('#app')
