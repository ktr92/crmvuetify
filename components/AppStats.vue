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
          <tr>
           <td>{{ orders.daysStats.clients }} </td>
           <td>{{ orders.daysStats.summ | price('price') }} </td>
           <td>{{ orders.daysStats.sale | price('price') }} </td>
           <td>{{ orders.daysStats.total | price('price') }} </td>
           <td>{{ (orders.daysStats.couriers || 0) | price('price') }} </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  props: ['orders', 'isfound'],
  data() {
    return {
      stats: [],
      headers: [
        'Всего клиентов',
        'Всего за заточку (руб)',
        'Всего за продажи (руб)',
        'Итого вал (руб)',
        'Всего ЗП курьеров',
        ],
    }
  }
}
</script>

<style scoped>
  td {
    max-width: 200px;
  }
  .theme--light.v-data-table.statstable {
    background: #f5f5f5;
  }
  .statstable  {
    margin-bottom: 30px;
  }
</style>