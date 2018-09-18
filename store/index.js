import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    counter: 0,
    user: {}
  },
  mutations: {
    increment (state) {
      state.counter++
    },
    setCurrentUser (state, user) {
      state.user = user
    }
  }
})

export default store