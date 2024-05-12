import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import layui from '@layui/layui-vue'
import '@layui/layui-vue/lib/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(layui)
app.mount('#app')
