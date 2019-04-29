// 全局注册的mutations

const mutations = {
  UPDATE_DIRECTION(state,payload) {
    state.direction = payload.direction
  },
  LOGIN_INFO(state,payload){
    state.basicInfo = payload
  }
}

export default mutations