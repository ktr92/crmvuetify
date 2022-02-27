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
           <td 
            v-for="(item, idx) in values"
            :key="idx">{{ item }} </td>
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
        'Админ',
        'Дней',
        'Клиентов',
        'Всего заточка (руб)',
        'Всего продажи (руб)',
        'Всего вал (руб)'
        ],
     /*  count: 0,
      summ: 0,
      sale: 0,
      total: 0,
      comment: '',
      blacklist: '' */
    }
  },

  watch: {
    orders(val) {
      console.log(this.values)
    }
  },  
  computed: {
    adminsGroup() {
      return _.groupBy(this.orders, order => order.admin)
    },
    adminsGroupArray() {
      return _.values(this.adminsGroup)
    },
    values() {
       return [
        this.adminsGroupArray.length,
        this.adminsGroupArray.map(item => item.phone).reduce((str, currentValue) => str + currentValue),
        this.adminsGroupArray.map(item => item.summ).reduce((str, currentValue) => str + currentValue),
        this.adminsGroupArray.map(item => item.sale).reduce((str, currentValue) => str + currentValue),
        this.adminsGroupArray.map(item => item.total).reduce((str, currentValue) => str + currentValue),
       ]
        
    },
    
  },
  mounted() {
   /*  console.log(this.values) */
  },
  
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