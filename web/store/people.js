import PeopleRepository from '@/repositories/people.repository.ts'

export default {
  state() {
    return {
      pepole: [],
    }
  },

  mutations: {
    async setPeople(state, people) {
      state.people = people
    },
  },

  actions: {
    async fetchPeople({ commit }) {
      const data = await PeopleRepository.getPeople()
      commit('setPeople', data)
    },
  },
}
