import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'

Vue.use(Vuex)

Object.assign(app, {
  modules: {
    user
  }
})

const store = new Vuex.Store(app)

export default store
