export const state = () => ({
 
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
    
  }
}

export const getters = {
  days: state => state.days
}
