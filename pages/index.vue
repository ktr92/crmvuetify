<template>
  <div>
    <v-data-table
      :headers="[]"
      :items="orders"
      :items-per-page="5"
      class="elevation-1"
    >
     <template v-slot:header="" >
      <thead>
        <tr>
          <th colspan="1">Имя</th>
          <th :colspan="orderscount">Category 2</th>
        </tr>
      </thead>
       </template>
      <template v-slot:item="props">
        <tr>
           <td>{{ props.item.name }}</td>
           <td v-for="prop in props.item.cart" :key="prop.label">
             {{ prop.count }}
           </td>
          
        </tr>
      </template>
    </v-data-table>
  </div>
</template>


<script>
import AppOrders from '@/components/AppOrders.vue'
export default {
  components: { AppOrders },
  asyncData({store}) {
    const orders = store.getters['orders/orders']
    return {orders}
  },
  data() {
    return {
      orders: {},
      headers: [
       
      ]
    }
  },
 
  computed: {
    orderscount: function() {
      return this.orders[0].cart.length
    }
  }
}
</script>