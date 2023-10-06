import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: "/login",
        component: () => import('@/views/login.vue')
    },
    {
        path: '/manage',
        component: () => import('@/views/manage.vue'),
        children: [
            {
                path: "/manage/home",
                component: () => import('@/views/home.vue'),
            },
            {
                path: "/manage/data",
                component: () => import('@/views/data.vue')
            },
            {
                path: "/manage/list",
                component: () => import('@/views/list.vue')
            }
        ]
    }
]
const router = new VueRouter({
    routes
})
export default router