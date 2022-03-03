<template>
  <div v-cloak>
    <div v-if="!init">
       <app-dayinit :admins="admins" :day="today"></app-dayinit>
    </div>
    <div v-else>
      <app-form :masters="masters" :couriers="couriers"></app-form>
      <div>
        <app-orders :orders="days" :show="checkdays" :isfound="0" v-if="checkdays"></app-orders>
        <div v-else>Клиентов пока не было</div>
      </div>
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
    // определяем, какое сегодня число
    const today = dateutils.getCurrentDate()
    // проверяем, выбрали ли сегодня админа
    const newday = await store.dispatch('checkday', {date: today.slice(0,10)})
    let admins = []
    if (newday.length > 0) {
      if (newday[0].admin) {
        store.dispatch('setday', newday[0].date)
        store.dispatch('setadmin', newday[0].admin)
      } 
    } else {
      // получаем всех админов
      admins = await store.dispatch('admins/fetchAdmins')
    }
    // получаем все заказы на сегодня
    const daystmp = await store.dispatch('days/fetchDay',  dateutils.formatIso(store.getters.day.slice(0,10)) || today.slice(0,10))   
    // получаем всех мастеров и курьеров
    const masters = await store.dispatch('masters/fetchMasters')
    const couriers = await store.dispatch('couriers/fetchCouriers')
    // сохраняем все полученные заказы во vuex 
    await store.dispatch('days/setDays', daystmp)
    // получаем все заказы из vuex
    const days = store.getters['days/days']
    return {days, masters, couriers, today, admins, newday}
  },
  data() { 
    return {
      orders: {},    
      headers: [],
    }
  },
  computed: {
    init: function() {
      return this.$store.getters.admin
    },
    checkdays: function() {
      return this.days.length
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
    width: 120px;
  }
  [v-cloak] { display: none; }
  .v-data-footer {
    display: none !important;
  }

</style>