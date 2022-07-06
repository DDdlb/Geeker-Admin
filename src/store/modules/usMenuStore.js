import { defineStore } from "pinia";
import piniaPersistConfig from '../persistConfig/piniaPersistConfig'

// menu Store
export const useMenuStore = defineStore({
    id: "MenuState",
    state: ()=>({
        // menu collapse
        isCollapse: false,
        // menu List
        menuList: []
    }),
    getters: {},
    actions: {
        setCollapse(){
            this.isCollapse = !this.isCollapse
        },
        setMenuList(menuList){
            this.menuList = menuList
        }
    },
    persist: piniaPersistConfig("MenuState")
})