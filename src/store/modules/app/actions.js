// import util from '@/config/util'
import Http from '@/config/http'
// import types from './types'

const actions = {
  // test
  test({ commit }) {
    Http.get('users/sign_in').then(res => {
      console.log(res)
    })
  }
}

export default actions
