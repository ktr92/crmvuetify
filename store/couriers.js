export const state = () => ({
  couriers: []
})

export const mutations = {
  setcouriers(state, payload) {
    state.couriers = payload
  }
}

export const actions = {
  async fetchCouriers({commit}) {
    try {
      return await this.$axios.$get('/api/couriers')     
    } catch (error) {
      throw error
    }    
  },
  async newCourier({commit}, data) {
    try {
      const req = await this.$axios.$post('/api/couriers/new', data).then(res => {
        return req
      }).catch(err => {
        commit('setError', err.response, {root: true})
        throw err
      })
    
    } catch (error) {
      throw error
    } 
  }
}


export const getters = {
  couriers: state => state.couriers
}
