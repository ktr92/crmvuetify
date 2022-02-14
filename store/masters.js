export const state = () => ({
  masters: []
})

export const mutations = {
  setMasters(state, payload) {
    state.masters = payload
  }
}

export const actions = {
  async fetchMasters({commit}) {
    try {
      return await this.$axios.$get('/api/masters')     
    } catch (error) {
      throw error
    }    
  },
  async newMaster({commit}, data) {
    try {
      const req = await this.$axios.$post('/api/masters/new', data).then(res => {
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
  masters: state => state.masters
}
