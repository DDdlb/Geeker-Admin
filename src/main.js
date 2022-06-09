import { createApp } from 'vue'
import App from './App.vue'
import './styles/common.scss'
import './styles/reset.scss'
import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import pinia from "./store/index";

import './styles/element-dark.scss'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus).use(pinia)

app.mount('#app')
