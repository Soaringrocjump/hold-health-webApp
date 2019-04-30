// 全局注册的mutations

const mutations = {
  UPDATE_DIRECTION(state,payload) {
    state.direction = payload.direction
  },
  LOGIN_INFO(state,payload){
    console.log('payload',payload)
    let sessionBasicInfo = JSON.parse(sessionStorage.getItem("basicInfo"))
    console.log('getItem',sessionBasicInfo)
    // state.basicInfo = payload;
    state.basicInfo = Object.assign(
      {},
      payload,
      sessionBasicInfo
    )
  },
  CHANGE_ORDER_LIST(state,payload){
    state.waitTestList = payload
  },
}

export default mutations