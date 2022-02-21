<template>
  <div v-cloak>
    <div v-if="!init">
       <app-dayinit :admins="admins" :day="today"></app-dayinit>
    </div>
    <div v-else>
      <app-form :master="masters"></app-form>
    <v-data-table
      :headers="headers"
      :items="days"
      :items-per-page="-1"
      class="elevation-1"
    >
     <template v-slot:header="" >
        <thead>
          <tr>
            <th rowspan="2">#</th>
            <th rowspan="2">Дата</th>
            <th rowspan="2">Админ</th>
            <th rowspan="2">Откуда</th>
            <th rowspan="2">Телефон</th>
            <th rowspan="2">Имя</th>
            <th colspan="11" rowspan="1">Заказ</th>
            <th rowspan="2">Сумма</th>
            <th rowspan="2">Скидка 1</th>
            <th rowspan="2">Мастер</th>
            <th rowspan="2">Продажа</th>
            <th rowspan="2">Скидка 2</th>
            <th rowspan="2">Итог</th>
            <th rowspan="2">О заказе</th>
            <th rowspan="2">О клиенте</th>
            <th rowspan="2">ЧС</th>
            <th rowspan="2">Точка</th>
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
           <td>{{ props.item.number }}</td>
           <td>{{ props.item.date }}</td>
           <td>{{ props.item.admin }}</td>
           <td>{{ props.item.from }}</td>
           <td>{{ props.item.phone }}</td>
           <!-- <td v-for="prop in props.item.cart" :key="prop.id">
             {{ prop.count }}
           </td> -->
           <td>{{ props.item.name }}</td>
           <td>{{ props.item.n100 }}</td>
           <td>{{ props.item.n150 }}</td>
           <td>{{ props.item.n200 }}</td>
           <td>{{ props.item.n250 }}</td>
           <td>{{ props.item.n300 }}</td>
           <td>{{ props.item.n350 }}</td>
           <td>{{ props.item.n400 }}</td>
           <td>{{ props.item.n450 }}</td>
           <td>{{ props.item.n500 }}</td>
           <td>{{ props.item.n550 }}</td>
           <td>{{ props.item.n600 }}</td>
            <td>{{ props.item.summ }}</td> 
           <td>{{ props.item.percent1 }}</td> 
          
           <td>{{ props.item.master }}</td> 
           <td>{{ props.item.sale }}</td> 
           <td>{{ props.item.percent2 }}</td> 
           <td>{{ props.item.total }}</td>          
           <td class="td--comment">{{ props.item.commentOrder }}</td> 
           <td class="td--comment">{{ props.item.commentClient }}</td> 
           <td>{{ props.item.blacklist }}</td> 
           <td>{{ props.item.location }}</td> 
        
        </tr>
      </template>
    </v-data-table>
    </div>
   
    
  </div>
  
</template>


<script>
import AppOrders from '@/components/AppOrders.vue'
import AppForm from '@/components/AppForm.vue'
import dateutils from '@/utils/date.utils'
import AppDayinit from '@/components/AppDayinit.vue'

export default {
  components: { AppOrders, AppForm, AppDayinit },
  async asyncData({store, route}) {
    let ready = 0
    // определяем, какое сегодня число
    const today = dateutils.formatDate(dateutils.getCurrentDate())
    // проверяем, выбрали ли сегодня админа
    const newday = await store.dispatch('checkday', {date: today})
    // получаем все заказы на сегодня
    const daystmp = await store.dispatch('days/fetchDay', store.getters.day || today)
    // получаем всех мастеров
    const masters = await store.dispatch('masters/fetchMasters')
    // получаем всех админов
    const admins = await store.dispatch('admins/fetchAdmins')
    // сохраняем все полученные заказы во vuex 
    await store.dispatch('days/setDays', daystmp)
    // получаем все заказы из vuex
    const days = store.getters['days/days']
    ready = 1
   /*  if (store.getters['days/days'].length > 0) {
      days = store.getters['days/days']
    }
    else {
      days = await store.dispatch('days/fetch')
      await store.dispatch('days/setdays', days)
    } */

    return {days, masters, ready, today, admins, newday}
  },
  data() { 
    return {
      orders: {},    
      headers: [],
    }
  },
  mounted() {
    if (this.newday.length > 0) {
      if (this.newday[0].admin) {
        this.$store.dispatch('setday', this.newday[0].date)
        this.$store.dispatch('setadmin', this.newday[0].admin)
     } 
    }
  },
  computed: {
    init: function() {
      return this.$store.getters.admin
    }
  }
 
}
</script>

<style >
td, th {
  border-bottom: thin solid rgba(0, 0, 0, 0.12);
  border-right: thin solid rgba(0, 0, 0, 0.12);
  padding: 0 5px !important;
  font-size: 12px !important;
}
 .v-label {
    font-size: 12px !important;
  }
   .v-input input{
    font-size: 12px !important;
  }
  th {
    white-space: nowrap;
  }

  td.td--comment {
    white-space: normal !important;
    max-width: 120px;
  }
  [v-cloak] { display: none; }

</style>