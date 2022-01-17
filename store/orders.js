export const state = () => ({
  orders: [
     {
       day: new Date().toLocaleTimeString(),
       admin: 'Николай',
       source: 'повт',
       name: 'Иван',
       phone: '89179999999',
       cart: [
         {
           label: "order100",
           count: 0
         },
         {
           label: "order150",
           count: 0
         },
         {
           label: "order200",
           count: 0
         },
         {
           label: "order250",
           count: 2
         },
         {
           label: "order300",
           count: 0
         },
         {
           label: "order350",
           count: 0
         },
         {
           label: "order400",
           count: 0
         }, 
         {
           label: "order450",
           count: 0
         }, 
         {
           label: "order500",
           count: 0
         },
         {
           label: "order550",
           count: 0
         },
         {
           label: "order600",
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
           label: "order100",
           count: 4
         },
         {
           label: "order150",
           count: 0
         },
         {
           label: "order200",
           count: 0
         },
         {
           label: "order250",
           count: 1
         },
         {
           label: "order300",
           count: 0
         },
         {
           label: "order350",
           count: 0
         },
         {
           label: "order400",
           count: 3
         }, 
         {
           label: "order450",
           count: 0
         }, 
         {
           label: "order500",
           count: 0
         },
         {
           label: "order550",
           count: 0
         },
         {
           label: "order600",
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
   ]
 })
  
 
 export const getters = {
   orders: state => state.orders
 }