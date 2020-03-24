import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () => import(/* webpackChunkName: "layout" */ '@/pages/login')
const Home = () => import(/* webpackChunkName: "layout" */ '@/pages/home')
const MainPage = () => import(/* webpackChunkName: "layout" */ '@/pages/mainPage')
// css布局
const BfcPage = () => import(/* webpackChunkName: "module" */ '@/pages/css/bfc')
const SfyPage = () => import(/* webpackChunkName: "module" */ '@/pages/css/sfy')
const SbPage = () => import(/* webpackChunkName: "module" */ '@/pages/css/sb')
const VerticalPage = () => import(/* webpackChunkName: "module" */ '@/pages/css/vertical')
const TablePage = () => import(/* webpackChunkName: "module" */ '@/pages/css/table')
const FlexPage = () => import(/* webpackChunkName: "module" */ '@/pages/css/flex')
const ScreenPage = () => import(/* webpackChunkName: "module" */ '@/pages/css/screen')
const FullScreen = () => import(/* webpackChunkName: "module" */ '@/pages/css/fullScreen')
// layout
const ThreeGrid = () => import(/* webpackChunkName: "module" */ '@/pages/layout/threeGrid')
const BoxPage = () => import(/* webpackChunkName: "module" */ '@/pages/layout/box')
// event
const EventPage = () => import(/* webpackChunkName: "module" */ '@/pages/event/event')
const ProtoPage = () => import(/* webpackChunkName: "module" */ '@/pages/event/proto')
const FlexScreen = () => import(/* webpackChunkName: "module" */ '@/pages/flexScreen')

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/flexScreen',
      name: 'flexScreen',
      component: FlexScreen
    },
    {
      path: '/main',
      name: 'mainPage',
      component: MainPage,
      redirect: {
        name: 'bfc'
      },
      children: [
        {
          path: '/main/bfc',
          name: 'bfc',
          component: BfcPage
          // redirect: {
          //   name: 'interfaceListAll'
          // },
          // children: [
          //   { path: '/open-api/category', name: 'interfaceListAll', component: interfaceList },
          //   { path: '/open-api/category/:id', name: 'interfaceList', component: interfaceList, meta: {keepAlive: false} },
          //   { path: '/open-api/interface/:id', name: 'apiView', component: apiView }
          // ]
        },
        {
          path: '/main/sfy',
          name: 'sfy',
          component: SfyPage
        },
        {
          path: '/main/sb',
          name: 'sb',
          component: SbPage
        },
        {
          path: '/main/vertical',
          name: 'vertical',
          component:VerticalPage
        },
        {
          path: '/main/table',
          name: 'table',
          component: TablePage
        },
        {
          path: '/main/flex',
          name: 'flex',
          component:FlexPage
        },
        {
          path: '/main/screen',
          name: 'screen',
          component:ScreenPage
        },
        {
          path: '/main/fullscreen',
          name: 'fullScreen',
          component:FullScreen
        },
        {
          path: '/main/threeGrid',
          name: 'threeGrid',
          component: ThreeGrid
        },
        {
          path: '/main/box',
          name: 'box',
          component: BoxPage
        },
        {
          path: '/main/event',
          name: 'event',
          component: EventPage
        },
        {
          path: '/main/proto',
          name: 'proto',
          component: ProtoPage
        }
      ]
    }
  ]
})

