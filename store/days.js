export const state = () => ({
  days: []
})


export const mutations = {
  setDays(state, payload) {
    state.days = payload
  },
  addDay(state, payload) {
    state.days.push(payload)
  }
}

export const actions = {
  setdays(context, day) {
    context.commit('setDays', day)
  },
  async fetch({commit}) {
    try {
      return await this.$axios.$get('/api/days')     
    } catch (error) {
      throw error
    }
    
  },
  async fetchDay({commit}, day) {
    try {
      return await this.$axios.$get(`/api/days/one/${day}`)     
    } catch (error) {
      throw error
    }
     
  },
  async fetchAdmins({commit}) {
    try {
      return await this.$axios.$get('/api/days/admins')     
    } catch (error) {
      throw error
    }
    
  },

}

export const getters = {
  days: state => state.days
}
