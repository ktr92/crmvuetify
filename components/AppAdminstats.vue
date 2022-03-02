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
          <tr v-for="(admin, idx) in adminsGroup" :key="idx">
            <td>
              {{ admin[0].admin }}
            </td>
            <td>
              {{ Object.keys(_.groupBy(admin, item => item.date)).length }}
            </td>
            <td>
              {{ admin.length }}
            </td>
            <td>
              {{ _.sumBy(admin, 'summ') | price('price') }}
            </td>
            <td>
              {{ _.sumBy(admin, 'sale') | price('price')}}
            </td>
            <td>
              {{ _.sumBy(admin, 'total') | price('price')}}
            </td>
            
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
        'Админы',
        'Дней',
        'Клиентов',
        'Всего заточка',
        'Всего продажи',
        'Всего вал'
        ],
    }
  },
  computed: {
    adminsGroup() {
      return _.groupBy(this.orders, order => order.admin)
    },
  },  
}
</script>

<style scoped>
 
</style>