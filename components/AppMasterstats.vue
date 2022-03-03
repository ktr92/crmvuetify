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
          <tr v-for="(master, idx) in mastersGroup" :key="idx">
            <td>
              {{ master[0].master }}
            </td>
            
            <td>
              {{ master.length }}
            </td>
            
            <td>
              {{ _.sum(
                [
                  _.sumBy(master, 'n100'),
                  _.sumBy(master, 'n150'),
                  _.sumBy(master, 'n200'),
                  _.sumBy(master, 'n250'),
                  _.sumBy(master, 'n300'),
                  _.sumBy(master, 'n350'),
                  _.sumBy(master, 'n400'),
                  _.sumBy(master, 'n450'),
                  _.sumBy(master, 'n500'),
                  _.sumBy(master, 'n550'),
                  _.sumBy(master, 'n600'),
                  _.sumBy(master, 'n650')
                ])              
              }}
            </td>
            
            <td>
              {{ _.sumBy(master, 'summ') | price('price')}}
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
  computed: {
    mastersGroup() {
      return _.groupBy(this.orders, order => order.master)
    }
  }
}
</script>

<style scoped>
 
</style>