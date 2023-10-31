import type { RouterConfig } from '@nuxt/schema'
import type { RouteRecordRaw} from "vue-router";

const customRoutes :RouteRecordRaw[] = [
    {
        path:'/xxx',
        name:'xxx',
        component: () => import("@/pages/roles/admin.vue")
    },{
        path:'/yyy',
        name:'yyy',
        component: () => import("@/pages/roles/normal.vue")
    },{
        path:'/zzz',
        redirect:'/users'
    },
]

export default <RouterConfig> {
    routes: (_routes) => _routes.concat(customRoutes)
}