<template>
  <div>
     <v-simple-table class="statstable">
      <template v-slot:default>
        <thead>
          <tr>
            <th v-for="(item, idx) in headers"
            :key="idx">{{ item }} </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(courier, idx) in couriersGroup" :key="idx">
            <td>
              {{ courier[0].courier || '(без курьера)' }}
            </td>
          
            <td>
              {{ courier.length }}
            </td>
            <td>
              {{ _.sumBy(courier, 'courierSumm') | price('price') }}
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
 import _ from 'lodash';

export default {
  props: ['orders', 'isfound'],
  data() {
    return {
      stats: [],
      headers: [
        'Курьеры',
        'Заказов',
        'Всего оплата',
        ],
    }
  },
  computed: {
    couriersGroup() {
      return _.groupBy(this.orders, order => order.courier)
    },
  },  
}
</script>

<style scoped>
 
</style>