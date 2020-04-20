export default {
  state() {
    return {
      total: 0,
    }
  },

  mutations: {
    add(state, value) {
      state.total += value
    },
    clear(state) {
      state.total = 0
    },
  },

  getters: {
    // total: (state, getters, rootState, rootGetters) => 0
  },
}
