export const state = () => ({
  error: '',
  admin: '',
  day: ''
})

export const mutations = {
  setAdmin(state, payload) {
    state.admin = payload
  },
  setDay(state, payload) {
    state.day = payload
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
    /* context.commit('setDay', day) */
    try {
      return await this.$axios.$post('/api/days/check', day)
    } catch (error) {
      throw error
    }
  },
  async setcurrent(context, data) {
    /* context.commit('setDay', day) */
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
  error: state => state.error
}