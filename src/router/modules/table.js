/**
 * 表格
 */
const tableRouter = [{
    path: '/table',
    component: ()=>import('../../views/layout/index.vue'),
    redirect: "/table/useHooks",
    meta: {
        keepAlive: true,
        requiresAuth: true,
        title: "超级表格",
        key: "table"
    },
    children: [{
        path: "/table/useHooks",
        name: "hook",
        component: ()=>import('../../views/table/useHooks/index.vue'),
        meta: {
            keepAlive: true,
            requiresAuth: true,
            title: "Hooks表格",
            key: "useHooks"
        }
    },{
        path: "/table/component",
        name: "component",
        component: ()=>import('../../views/table/useComponent/index.vue'),
        meta: {
            keepAlive: true,
            requiresAuth: true,
            title: "Components表格",
            key: "useComponents"
        }
    }]
}]

export default tableRouter