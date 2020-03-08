import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    name:'Tabbar',
    path:'/',
    component:()=>import('@/views/tabbar'),
    children:[
      {
        name: 'Home',
        path:'home',
        component: ()=>import('@/views/home')
      },
      {
        name:'My',
        path:'my',
        component:()=>import('@/views/my')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login')
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
