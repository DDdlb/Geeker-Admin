/**
 * 首页模块
 */
const homeRouter = [
	{
		path: "/home",
		component: () => import("../../views/layout/index.vue"),
		redirect: "/home/index",
		children: [
			{
				path: "index",
				name: "home",
				component: () => import("../../views/home/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "首页",
					key: "home"
				}
			}
		]
	}
];

export default homeRouter