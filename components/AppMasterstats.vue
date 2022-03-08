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
          <tr v-for="(master, idx) in orders.masterStats" :key="idx">
            <td>
              {{ master.name }}
            </td>
            
            <td>
              {{ master.clients }}
            </td>
            
            <td>
              {{ master.count }}
            </td>
            
            <td>
              {{ master.summ | price('price')  }}
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
        'Мастера',
        'Клиентов',
        'Всего инструментов',
        'Сумма'
        ],
    }
  },
  mounted() {
    console.log(this.orders)
  }
/*   computed: {
    mastersGroup() {
      return _.groupBy(this.orders, order => order.master)
    }
  } */
}
</script>

<style scoped>
 
</style>