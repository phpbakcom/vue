import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import First from '../components/First.vue'
import A from '../components/A.vue'
import B from '../components/B.vue'
import C from '../components/C.vue'
import D from '../components/D.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component:First,
      children:[
          {
              path: '/c',
              name: 'C',
              component:C
          },
          {
              path: '/d',
              name: 'D',
              component:D
          }
      ]
  },
    {
        path: '/a',
        name: 'A',
        component:A
    },
    {
        path: '/b',
        name: 'B',
        component:B
    },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
        path:'/axios2/:sid',
        name:'Axios2',
        component:()=>import('../components/Axios2.vue')
    },
    {
    path:'/testid/:id',
        name:'testid',
        component:()=>import('../components/testid.vue')
    },
    {
        path:'/vuex1',
        component:()=>import('../views/Vuex1.vue')
    },
    {
        path:'/user1',
        component:()=>import('../views/User1.vue')
    },
    {
        path:"/user2",
        component:()=>import('../components/UserManage/Customers.vue')
    },{
    path:"/lunbo",
        component:()=>import('../views/lunbo.vue')
    },{
    path:'/stylebind',
        component:()=>import('../views/StyleBind.vue')
    },{
        path:'/datalist',
        component:()=>import('../views/DataList.vue')
    }
    ,{
        path:'/goods',
        component:()=>import('../views/Goods.vue')
    }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
