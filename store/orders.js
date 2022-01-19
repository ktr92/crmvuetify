export const state = () => ({
  orders: [
     {
       day: new Date().toLocaleTimeString(),
       admin: 'Николай',
       source: 'повт',
       name: 'Иван',
       phone: '89179999999',
       order100: '0',
       order150: '1',
       order200: '0',
       order250: '2',
       order300: '0',
       order350: '4',
       order400: '0',
       order450: '0',
       order500: '0',
       order550: '0',
       order600: '3',
       ordertotal: 500,
       master: 'Алексей',
       ordersale: 250,
       orderplus: 0,
       orderminus: 0,
       total: 750,
       comment: '',
       status: 'ok'
     },
     {
       day: new Date().toLocaleTimeString(),
       admin: 'Николай',
       source: 'повт',
       name: 'Александр',
       phone: '8917111111',
       order100: '0',
       order150: '5',
       order200: '0',
       order250: '0',
       order300: '0',
       order350: '0',
       order400: '0',
       order450: '0',
       order500: '3',
       order550: '0',
       order600: '1',
       ordertotal: 500,
       master: 'Алексей',
       ordersale: 250,
       orderplus: 0,
       orderminus: 0,
       total: 750,
       comment: '',
       status: 'fail'
     },
   ],
   masters: [
     'Первый',
     'Второй',
     'Третий',
     'Четвертый'
   ],
   days: [
     {
       date: '',
       admin: {},
       orders: [],
       comment: ''
     }
   ],
   
  /* orders: [
     {
       day: new Date().toLocaleTimeString(),
       admin: 'Николай',
       source: 'повт',
       name: 'Иван',
       phone: '89179999999',
       cart: [
         {
           label: '100',
           id: "order100",
           count: 0
         },
         {
            label: '150',
           id: "order150",
           count: 0
         },
         {
            label: '200',
           id: "order200",
           count: 0
         },
         {
          label: '250',
           id: "order250",
           count: 2
         },
         {
          label: '300',
           id: "order300",
           count: 0
         },
         {
          label: '350',
           id: "order350",
           count: 0
         },
         {
          label: '400',
           id: "order400",
           count: 0
         }, 
         {
          label: '450',
           id: "order450",
           count: 0
         }, 
         {
          label: '500',
           id: "order500",
           count: 0
         },
         {
          label: '550',
           id: "order550",
           count: 0
         },
         {
          label: '600',
           id: "order600",
           count: 0
         },
         
       ],
       ordertotal: 500,
       master: 'Алексей',
       ordersale: 250,
       orderplus: 0,
       orderminus: 0,
       total: 750,
       comment: ''
     },
     {
       day: new Date().toLocaleTimeString(),
       admin: 'Николай',
       source: 'повт',
       name: 'Александр',
       phone: '8917111111',
       cart: [
        {
          label: '100',
          id: "order100",
          count: 4
        },
        {
           label: '150',
          id: "order150",
          count: 0
        },
        {
           label: '200',
          id: "order200",
          count: 0
        },
        {
         label: '250',
          id: "order250",
          count: 1
        },
        {
         label: '300',
          id: "order300",
          count: 0
        },
        {
         label: '350',
          id: "order350",
          count: 0
        },
        {
         label: '400',
          id: "order400",
          count: 0
        }, 
        {
         label: '450',
          id: "order450",
          count: 0
        }, 
        {
         label: '500',
          id: "order500",
          count: 0
        },
        {
         label: '550',
          id: "order550",
          count: 0
        },
        {
         label: '600',
          id: "order600",
          count: 2
        },
         
       ],
       ordertotal: 500,
       master: 'Алексей',
       ordersale: 250,
       orderplus: 0,
       orderminus: 0,
       total: 750,
       comment: ''
     },
   ] */
 })

 
 export const getters = {
   orders: state => state.orders,
   masters: state => state.masters,
 }
