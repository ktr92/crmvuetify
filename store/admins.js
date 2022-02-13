export const state = () => ({
  admins: []
})

export const mutations = {
  setAdmins(state, payload) {
    state.admins = payload
  }
}

export const actions = {
  async fetchAdmins({commit}) {
    try {
      return await this.$axios.$get('/api/admins')     
    } catch (error) {
      throw error
    }    
  },
  async newAdmin({commit}, data) {
    try {
      const req = await this.$axios.$post('/api/admins/new', data).then(res => {
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
  admins: state => state.admins
}
