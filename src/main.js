import { createApp } from 'vue'
import App from './App.vue'
import './styles/common.scss'
import './styles/reset.scss'
// element-plus
import ElementPlus from 'element-plus'
// element-plus css
import 'element-plus/dist/index.css'
// element-plus icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// Vue router
import router from './router'
// Pinia store
import pinia from "./store/index";

import './styles/element-dark.scss'
console.log("ccccc");
const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router).use(ElementPlus).use(pinia)

app.mount('#app')
