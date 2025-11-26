/*
 * @Descripttion:
 * @version:
* @Date: 2021-04-21 09:18:32
* @LastEditors:Ziyang

* @Author:Ziyang



 */
// home.js
const Layout = () => import('@/layout/index.vue')
const Home = () => import('@/views/home/index.vue')

export default [
  {
    path: '/home',
    component: Layout,
    name: 'Dashboard',
    meta: {
      title: 'menu.dashboard',
    },
    icon: 'icon-home',
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
        meta: {
          title: 'menu.homepage',
          affix: true,
        },
      },
    ],
  },
]
