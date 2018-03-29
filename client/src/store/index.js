import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user: userModule, // store.state.user
    other: {
      state: {
        other: 'other'
      }
    }
  }
})

export default store
