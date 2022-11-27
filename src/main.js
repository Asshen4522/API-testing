import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import './style.css'
import App from './App.vue'
import Posts from "./pages/Posts.vue";
import Users from "./pages/Users.vue";

const routes = [
    { path: '/', component: Users },
    { path: '/posts', component: Posts },
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const app = createApp(App)
app.use(router)

app.mount('#app')
