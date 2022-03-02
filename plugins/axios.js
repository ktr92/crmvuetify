

export default function ({ $axios, redirect, store }) {

  $axios.onResponse(response => {
    
  })

  $axios.onError(error => {
    if (error.response) {
      /* if (error.response.status === 401) {
        redirect('/admin/login?message=session')
        store.dispatch('auth/logout')
      } */
      if (error.response.status === 500) {
        console.log(error.response)
        console.error('Server 500 error')
      }
    }
  })
}
