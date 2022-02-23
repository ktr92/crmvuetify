<template>
 <!--  <app-table :items="days" :headers="headers"></app-table> -->
     <app-orders :orders="days" :show="checkinfo" :isfound="0"></app-orders>

</template>

<script>
import AppTable from '~/components/AppTable.vue'
export default {
  components: { AppTable },
  async asyncData({store}) {
    let ready = 0
    const days = await store.dispatch('days/fetchDay', '25.06.2019')
    ready = 1
    return {days, ready}
  },
  computed: {
    checkinfo: {
       get() {
        return this.days.length || 0
       },
       set(val) {
        this.value = val
      }   
       
     }   
  }

}
</script>

<style>
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