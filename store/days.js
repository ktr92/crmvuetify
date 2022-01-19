export const state = () => ({
  days: [
    {
      id: '2022-01-17',
      date: '2022-01-17',
      admin: '1'
    },
    {
      id: '2022-01-18',
      date: '2022-01-18',
      admin: '2'
    }
  ]
})


export const mutations = {
  setDays(state, days) {
    state.days = days
  },
  addDay(state, payload) {
    state.days.push(payload)
  }
}

export const getters = {
  days: state => state.days
}