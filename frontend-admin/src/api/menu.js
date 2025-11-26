/*
 * @Descripttion:
 * @version:
* @Date: 2021-04-21 09:18:32
* @LastEditors:Ziyang

* @Author:Ziyang



 */
import request from '@/utils/request'

// 获取菜单
export const GetMenus = params => {
  return request({
    url: '/admin/system/index/menus',
    method: 'get',
    params,
  })
}
