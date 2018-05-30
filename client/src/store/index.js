import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './modules/user'
import messageModule from './modules/message'


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user: userModule, // store.state.user
    message: messageModule,
    other: {
      state: {
        other: 'other'
      }
    }
  }
})

export default store
