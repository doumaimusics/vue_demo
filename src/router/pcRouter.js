import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)   // 把vue-router当作插件引入

import home from '@/components/home'
import document from '@/components/document'
import about from '@/components/about'


let router = new VueRouter({
    mode:'history',     // vue 一般用两个模式都跳转  通过mode来设置跳转模式  hash(哈希，默认是哈希跳转就是在前面加#号) 和 history(这种模式没有#)
    routes:[
        {
            path:'/home',
            component:home
        },
        {
            path:'/document',
            component:document
        },
        {
            path:'/about',
            component:about
        }
    ]
})

export default router;   // 实例报漏出去