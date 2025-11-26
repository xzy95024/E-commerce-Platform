/*
 * @Descripttion:
 * @version:
* @Date: 2021-04-21 09:18:32
* @LastEditors:Ziyang

* @Author:Ziyang



 */
// login.js
const Login = () => import('@/views/login/index.vue')

export default [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
]
