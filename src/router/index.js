import { createRouter, createWebHashHistory } from "vue-router";
// 读取所有路由
const metaRouters = import.meta.globEager("./modules/*.js")

// * 处理路由, 各个模块路由信息存储在routerArray中
export const routerArray = [];
Object.keys(metaRouters).forEach(item => {
	Object.keys(metaRouters[item]).forEach((key) => {
		routerArray.push(...metaRouters[item][key]);
	});
});

const routes = [
    {
        path: "/",
        redirect: { name: "login" }
    },{
        path: "/login",
		name: "login",
		component: () => import("@/views/Login/index.vue"),
		meta: {
			requiresAuth: false,
			title: "登录页",
			key: "login"
		}
    },
    ...routerArray
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router