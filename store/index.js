export const state = () => ({
  error: '',
  admin: '',
  day: '',
  count: 0
})

export const mutations = {
  setAdmin(state, payload) {
    state.admin = payload
  },
  setDay(state, payload) {
    state.day = payload
  },
  addCount(state) {
    state.count = state.count++
  },
  setError(state, error) {
    state.error = error
  },
  clearError(state) {
    state.error = null
  }
}

export const actions = {
  setadmin(context, admin) {
    context.commit('setAdmin', admin)
  },
  setday(context, day) {
    context.commit('setDay', day)
  },
  seterror(context, error) {
    context.commit('setError', error)
  },
  async checkday(context, day) {
    try {
      return await this.$axios.$post('/api/days/check', day)
    } catch (error) {
      throw error
    }
  },
  async setcurrent(context, data) {
    try {
      return await this.$axios.$post('/api/days/current', data)
    } catch (error) {
      throw error
    }
  },
}

export const getters = {
  admin: state => state.admin,
  day: state => state.day,
  count: state => state.count,
  error: state => state.error
}