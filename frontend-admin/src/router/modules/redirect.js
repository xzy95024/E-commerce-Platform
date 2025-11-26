/*
 * @Descripttion:
 * @version:
* @Date: 2021-04-21 09:18:32
* @LastEditors:Ziyang

* @Author:Ziyang



 */
const Layout = () => import('@/layout/index.vue')
const Redirect = () => import('@/views/redirect/index.vue')

export default [
  {
    path: '/redirect/:path(.*)',
    component: Layout,
    children: [
      {
        path: '',
        component: Redirect,
      },
    ],
  },
]
