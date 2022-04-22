import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import StarportPlugin from 'vue-starport'

const app = createApp(App)
app.use(router)
app.use(StarportPlugin())
app.mount('#app')
