import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuthenticated: false,
    username: ''
  },
  mutations: {
    AUTHENTICATE (state, value) {
      state.isAuthenticated = value
    },
    SET_USERNAME (state, username) {
      state.username = username
    }
  },
  actions: {
    authenticate ({ commit }, { value, username }) {
      commit('AUTHENTICATE', value)
      commit('SET_USERNAME', username)
    }
  },
  getters: {
    getUsername (state) {
      return state.username
    }
  }
})
