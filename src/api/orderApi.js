/*订单*/
import request from '@/axios/index'

//获取订单列表
export function getOrderList() {
  return request({
    url: '/order/orderList',
    method: "post",
    data: data,
  })
}
