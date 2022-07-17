import { defineStore } from "pinia";
import piniaPersistConfig from '../persistConfig/piniaPersistConfig'
import { useRouter } from "vue-router";
// 主页地址
const HOME_VALUE = "/home/index"
// 不需要添加至tab的path
const TABS_BLACK_LIST = ["/403", "/404", "/500", "/login"]

export const useTabStore = defineStore({
    id: "TabState",
    state: ()=>({
        // 当前tab
        tabsMenuValue : HOME_VALUE,
        // tabs list
        tabsMenuList : [{title: "首页", path: HOME_VALUE, icon: "HomeFilled", close: false}]
    }),
    getters: {},
    actions: {
        addTabs(tabItem){
            // 不需要添加至tabs，直接返回
            if (TABS_BLACK_LIST.includes(tabItem.path)) return;
            // 重构tabItem
            const tabInfo = {
                title: tabItem.title,
                path: tabItem.path,
                close: tabItem.close,
                icon: tabItem.icon
            }
            // menu list中不存在，添加新增项
            if(this.tabsMenuList.every(item => item.path !== tabItem.path)){
                this.tabsMenuList.push(tabInfo)
            }
            this.setTabsMenuValue(tabItem.path)

        },
        setTabsMenuValue(tabsMenuValue){
            this.tabsMenuValue = tabsMenuValue
        },
        removeTabs(tabPath){
            const router = useRouter()
            let tabsMenuValue = this.tabsMenuValue
            const tabsMenuList = this.tabsMenuList
            if(tabPath === tabsMenuValue){
                tabsMenuList.map((item, index)=>{
                    if(item.path === tabPath){
                        tabsMenuValue = tabsMenuList[index - 1]
                        router.push(tabsMenuValue.path)
                    }
                })
            }
            this.tabsMenuValue = tabsMenuValue
            this.tabsMenuList = tabsMenuList.filter(item=> item.path !== tabPath)
        }
    },
    persist: piniaPersistConfig("TabsState")
})