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
           <td>{{ values[0] }} </td>
           <td>{{ values[1] | price('price')}} </td>
           <td>{{ values[2] | price('price')}} </td>
           <td>{{ values[3] | price('price')}} </td>
           <td>{{ values[4] }} </td>
           <td>{{ values[5] }} </td>
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
        'Комментарии',
        'ЧС'
        ],
    }
  },
  computed: {
    values() {
      return [
        this.orders.length,
        this.orders.map(item => item.summ).reduce((str, currentValue) => str + currentValue),
        this.orders.map(item => item.sale).reduce((str, currentValue) => str + currentValue),
        this.orders.map(item => item.total).reduce((str, currentValue) => str + currentValue),
        this.orders.map(item => item.commentClient).reduce((str, currentValue) => {
          if (currentValue && currentValue.length > 1) {
            return str + currentValue + ' / '
          }
          return str
        }),
        this.orders.map(item => item.blacklist).reduce((str, currentValue) => {
          if (currentValue && currentValue.length > 1) {
            return str + currentValue + ' / '
          }
          return str
        })
      ]
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