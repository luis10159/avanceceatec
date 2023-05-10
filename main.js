import { createApp } from 'vue'
import './scss/_style.scss'
import App from './App.vue'
import { createPinia } from 'pinia'
const pinia = createPinia()
import router from './router'
const app = createApp(App)

app.use(pinia).use(router).mount('#app')
