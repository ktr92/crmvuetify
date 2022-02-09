export const state = () => ({
  days: []
})


export const mutations = {
  setDays(state, days) {
    state.days = days
  },
  addDay(state, payload) {
    state.days.push(payload)
  }
}

export const actions = {
  async fetch({commit}) {
    try {
      return await this.$axios.$get('/api/days')     
    } catch (error) {
      throw error
    }
    
  },
  async fetchDay({commit}, day) {
    try {
      return await this.$axios.$get(`/api/days/${day}`)     
    } catch (error) {
      throw error
    }
    
  },

}

export const getters = {
  days: state => state.days
}
