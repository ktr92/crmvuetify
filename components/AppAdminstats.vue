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
          <tr v-for="(admin, idx) in orders.adminStats" :key="idx">
            <td>
              {{ admin.name }}
            </td>
            <td>
              {{ admin.days }}
            </td>
            <td>
              {{ admin.clients }}
            </td>
            <td>
              {{ admin.summ | price('price')  }}
            </td>
            <td>
              {{ admin.sale | price('price')  }}
            </td>
            <td>
              {{ admin.total | price('price')  }}
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
        'Админы',
        'Дней',
        'Клиентов',
        'Всего заточка',
        'Всего продажи',
        'Всего вал'
        ],
    }
  },

}
</script>

<style scoped>
 
</style>