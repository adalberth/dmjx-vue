import './css/style.css'
import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import App from './App.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
