/*员工*/
import request from '@/axios/index'

//获取员工信息
export function getStaff() {
  return request({
    url: '/staff/getStaff',
    method: "post",
    data: data,
  })
}

//登出
export function logout() {
  return request({
    url: '/staff/logout',
    method: "post",
    data: data,
  })
}