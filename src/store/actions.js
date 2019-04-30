// 全局注册的action
//获取api接口
import {
  getOrderList,
} from '@/api/orderApi';

const actions = {
  //获取订单列表
  async getOrderList({commit}, params) {

    const response = await getOrderList(params) //getInstitutionList是api接口的名字
    const {data, resultCode} = response;
    commit({
      type: 'CHANGE_ORDER_LIST',
      data,
    })
  },
}

export default actions