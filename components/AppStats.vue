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
        'Всего посещений',
        'Всего за заточку (руб)',
        'Всего за продажи (руб)',
        'Итого вал (руб)',
        'Комментарии',
        'ЧС'
        ],
     
      
     /*  count: 0,
      summ: 0,
      sale: 0,
      total: 0,
      comment: '',
      blacklist: '' */
    }
  },
 /*  watch: {
    summ: () => {
      console.log(this.summ)
    }  
  }, */
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
  },
  mounted() {
    /* this.values = this.headers.map(item => ({
      name: '',
      value: this.summValue
    })) */
    
    /* this.count = this.orders.length
    this.stats.push(this.count)

    this.summ = this.orders.map(item => item.summ).reduce((str, currentValue) => str + currentValue)
    this.stats.push(this.summ)

    this.sale = this.orders.map(item => item.sale).reduce((str, currentValue) => str + currentValue)
    this.stats.push(this.sale)

    this.total = this.orders.map(item => item.total).reduce((str, currentValue) => str + currentValue)
    this.stats.push(this.total)

    this.comment = this.orders.map(item => item.commentClient).reduce((str, currentValue) => {
      if (currentValue && currentValue.length > 1) {
        return str + currentValue + ' / '
      }
      return str
    })
    this.stats.push(this.comment)

    this.blacklist = this.orders.map(item => item.blacklist).reduce((str, currentValue) => {
      if (currentValue && currentValue.length > 1) {
        return str + currentValue + ' / '
      }
      return str
    })
    this.stats.push(this.blacklist) */
    
  }
}
</script>

<style>
  td {
    max-width: 200px;
  }
  .theme--light.v-data-table.statstable {
    background: #f5f5f5;
  }
</style>