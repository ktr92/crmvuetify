<template>
  <div>
    <app-form :masters="masters"></app-form>
    <v-data-table
      :headers="headers"
      :items="orders"
      :items-per-page="-1"
      class="elevation-1"
    >
     <template v-slot:header="" >
        <thead>
          <tr>
            <th rowspan="2">Имя</th>
            <th rowspan="2">Откуда</th>
            <th rowspan="2">Телефон</th>
            <th colspan="11" rowspan="1">Заказ</th>
            <th rowspan="2">Итого заказ</th>
            <th rowspan="2">Мастер</th>
            <th rowspan="2">Продажа</th>
            <th rowspan="2">Доп</th>
            <th rowspan="2">Скидка</th>
            <th rowspan="2">ИТОГО</th>
            <th rowspan="2">Комментарий</th>
          </tr>
          <!-- <tr>
             <th v-for="label in orderlabels" :key="label">
              {{ label }}
            </th>
          </tr> -->

          <tr>
            <th>100</th>
            <th>150</th>
            <th>200</th>
            <th>250</th>
            <th>300</th>
            <th>350</th>
            <th>400</th>
            <th>450</th>
            <th>500</th>
            <th>550</th>
            <th>600</th>
          </tr>
          
        </thead>
      </template>
      <template v-slot:item="props">
        <tr>
           <td>{{ props.item.name }}</td>
           <td>{{ props.item.source }}</td>
           <td>{{ props.item.phone }}</td>
           <!-- <td v-for="prop in props.item.cart" :key="prop.id">
             {{ prop.count }}
           </td> -->
           <td>{{ props.item.order100 }}</td>
           <td>{{ props.item.order150 }}</td>
           <td>{{ props.item.order200 }}</td>
           <td>{{ props.item.order250 }}</td>
           <td>{{ props.item.order300 }}</td>
           <td>{{ props.item.order350 }}</td>
           <td>{{ props.item.order400 }}</td>
           <td>{{ props.item.order450 }}</td>
           <td>{{ props.item.order500 }}</td>
           <td>{{ props.item.order550 }}</td>
           <td>{{ props.item.order600 }}</td>
           <td>{{ props.item.ordertotal }}</td> 
           <td>{{ props.item.master }}</td> 
           <td>{{ props.item.ordersale }}</td> 
           <td>{{ props.item.orderplus }}</td> 
           <td>{{ props.item.orderminus }}</td> 
           <td>{{ props.item.total }}</td> 
           <td>{{ props.item.comment }}</td> 
        </tr>
      </template>
    </v-data-table>
  </div>
</template>


<script>
import AppOrders from '@/components/AppOrders.vue'
import AppForm from '~/components/AppForm.vue'
export default {
  components: { AppOrders, AppForm },
  asyncData({store}) {
    const orders = store.getters['orders/orders']
    const masters = store.getters['orders/masters']
    return {orders, masters}
  },
  data() {
    return {
      orders: {},    
      headers: []
    }
  },
 
 /*  computed: {
    orderscount: function() {
      return this.orders[0].cart.length
    },
    orderlabels: function() {
      return this.orders[0].cart.map(item => item.label)
    }
  } */
}
</script>

<style >
td, th {
  border-bottom: thin solid rgba(0, 0, 0, 0.12);
  border-right: thin solid rgba(0, 0, 0, 0.12);
}
 .v-label {
    font-size: 12px !important;
  }
   .v-input input{
    font-size: 12px !important;
  }

</style>