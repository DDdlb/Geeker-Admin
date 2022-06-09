import {  defineStore, createPinia } from 'pinia'
import piniaPersistConfig from './persistConfig/globalState'
import piniaPersist from "pinia-plugin-persist";
/**
 *  pinia 全局状态管理
 */

export const useGlobalStore = defineStore('GlobalState', {
    state: ()=>({
        // token
        token: "asdasdads",
        // userInfo
        userInfo: "",
        // language
        language: "",
        // 主题配置
        themeConfig: {
			// 默认 primary 主题颜色
			primary: "#409eff",
			// 是否开启深色模式
			isDark: false
		}
    }),
    getters: {},
    actions: {
        setToken(token){
            this.token = token
        },
        setUserInfo(userInfo){
            this.userInfo = userInfo
        },
        setLanguage(lang){
            this,this.language = lang
        },
        setThemeConfig(themeConfig){
            this.themeConfig = themeConfig
        }
    },
    persist: piniaPersistConfig("GlobalState")
})

const pinia = createPinia();
pinia.use(piniaPersist);

export default pinia;