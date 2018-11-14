import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Compute from '@/components/Compute'
import Watch from '@/components/WatchDemo'
import User from '@/components/User'
import Ifdemo from '@/components/Ifdemo'
import Fordemo from '@/components/ForDemo'
import Von from '@/components/V-on'
import FormDemo from '@/components/Form'

Vue.use(Router)

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

/*const routes= [
  {path: '/', name: 'HelloWorld', components: {
      default: HelloWorld,
      a: Bar,
      b: Foo
    }},


  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },

  // 动态路径参数 以冒号开头
  { path: '/user/:id', component: User,
    children: [
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'foo',
        component: Foo
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 会被渲染在 User 的 <router-view> 中
        path: 'bar',
        component: Bar
      }
    ]
  }

]*/

const routes=[
  { path: '/', component: User },
  { path: '/bar', component: Bar },
  { path: '/compute', component: Compute },
  { path: '/watchdemo', component: Watch },
  { path: '/ifdemo', component: Ifdemo },
  { path: '/fordemo', component: Fordemo },
  { path: '/von', component: Von },
  { path: '/form', component: FormDemo }
]

export default new Router({routes})
