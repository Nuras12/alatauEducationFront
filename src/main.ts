import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/router";
import {createPinia} from "pinia";
import { createHead } from '@unhead/vue'

const head = createHead()
const pinia = createPinia()

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(head)
app.mount('#app')

