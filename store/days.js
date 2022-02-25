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
  setDays(context, day) {
    context.commit('setDays', day)
  },
  addDay(context, day) {
    context.commit('addDay', day)
  },
  async fetch({ commit }) {
    try {
      return await this.$axios.$get('/api/days')
    } catch (error) {
      throw error
    }

  },
  async fetchDay({ commit }, day) {
    try {
      return await this.$axios.$get(`/api/days/one/${day}`)
    } catch (error) {
      throw error
    }

  },
  async fetchDaysRange({ commit }, daysrange) {
    try {
      return await this.$axios.$get(`/api/days/range/${daysrange}`)
    } catch (error) {
      throw error
    }

  },
  async fetchAdmins({ commit }) {
    try {
      return await this.$axios.$get('/api/days/admins')
    } catch (error) {
      throw error
    }

  },
  async addRow({ commit }, data) {
    try {
    
      const req = await this.$axios.$post('/api/days/addrow', data).then(res => {  
        return req
      }).catch(err => {
        commit('setError', err.response, {root: true})
        throw err
      })
    } catch (error) {
      throw error
    }
  },
  async clientinfo({commit}, phone) {
    try {
      return await this.$axios.$get(`/api/days/clientinfo/${phone}`)
    } catch (error) {
      throw(error)
    }
  }


}

export const getters = {
  days: state => state.days
}
