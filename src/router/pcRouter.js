import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter) // 把vue-router当作插件引入

import home from '@/components/home'
import document from '@/components/document'
import about from '@/components/about'
import noPage from '../components/404.vue'
import study from '@/components/views/study'
import work from '@/components/views/work.vue'
import hobby from '../components/views/hobby.vue'


let router = new VueRouter({
  mode: 'history', // vue 一般用两个模式都跳转  通过mode来设置跳转模式  hash(哈希，默认是哈希跳转就是在前面加#号) 和 history(这种模式没有#)
  linkActiveClass: 'isActive', // 自定义激活状态的class类名
  routes: [{ // 根路径
      path: '/',
      component: home
    },
    {
      name: 'Home', //这个name 代表当前路由的对象
      path: '/home',
      component: home,
      alias: '/index' // alias 可以给路由起别名  就是给当前的路由换个名字  但是还是访问的当前的路由  但是状态不是激活的状态,因为link里写的还是原来的路径，想要激活改成当前别名
    },
    {
      name: 'Document',
      path: '/document',
      component: document
    },
    {
      path: '/about',
      component: about,
      children: [{    // 子路由
          name: 'About',   // 有默认子路由就不要在父路由设置name  把name设置在默认路由里
          path: '',    // 这里相当于是/about的默认路径  就是默认显示第一个
          component: study
        },
        {
          path: 'work',   // 子路径千万不能写 / 写/就相当于是是相对于根路径  子路径是相对与父级路径
          component: work
        },
        {
          path: 'hobby',
          component: hobby
        },
      ]
    },
    { // 路由重定向  当访问的页面不从在的时候 1、跳转在一个404页面 ，  2、用redirect重定向在一个已经有的页面
      path: '*',
      // component: noPage
      // redirect:'/home'    // 路由重定向 方式1
      // redirect:{path:'/about'}   路由重定向 方式2
      // redirect: {name: 'Document'} // 用的是上面路由里的name名字  路由重定向 方式3
      redirect: (to) => { // 动态的设置路由  可以判断  必须return
        return {
          name: 'Home'
        }
      }
    }
  ]
})

export default router; // 实例报漏出去
