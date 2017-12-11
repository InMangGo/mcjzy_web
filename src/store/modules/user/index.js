import actions from './actions'
import mutations from './mutations'

const state = {}

const getters = {}

const user = {
  namespaced: true,
  getters,
  state,
  actions,
  mutations
}

export default user
