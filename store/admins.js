export const state = () => ({
  admins: [
    {  
      id: '1',
      name: 'Админ 1'
    },
    {  
      id: '2',
      name: 'Админ 2'
    }
   ]
})

export const getters = {
  admins: state => state.admins
}
  
