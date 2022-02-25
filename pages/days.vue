<template>
<div>
  <v-form 
      v-model="valid"
      ref="form"
      @submit.prevent="onSubmit"
    >
       <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="computedDateFormatted"
            label="Выберите день"
            prepend-icon="mdi-calendar"
            name="date"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          name="dates"
          :max="maxDate"
          locale="ru-Ru"
          first-day-of-week="1"
          
        ></v-date-picker>
      </v-menu>
      <v-btn
        class="mr-4 primary"
        type="submit"
        
      >
        Показать
      </v-btn>
     
    </v-form>
    <div>
      <app-orders :orders="days" :show="checkinfo" :isfound="0" v-if="dayslength"></app-orders>
      <div v-else>Данных за этот день не найдено</div>
    </div>
         

</div>
 <!--  <app-table :items="days" :headers="headers"></app-table> -->

</template>

<script>
import AppTable from '~/components/AppTable.vue'
import dateutils from '@/utils/date.utils'

export default {
  components: { AppTable },
  async asyncData({store}) {
    let ready = 0
    let datestr = '25.06.2019'
    const days = await store.dispatch('days/fetchDay', dateutils.formatIso(datestr))
    ready = 1
    return {days, ready}
  },
  data() {
    return {
      date: dateutils.getCurrentDate(),
      dates: [],
      dateFormatted: dateutils.formatDate(dateutils.getCurrentDate()),
      maxDate: '',
      valid: false,   
      menu2: false, 
    }
  },
  computed: {
    checkinfo: {
       get() {
        return this.days.length || 0
       },
       set(val) {
        this.value = val
      }   
       
     },
    computedDateFormatted () {
      return dateutils.formatDate(this.date)
    },
    computedDateRangeFormatted () {
      return this.dates.map(item => dateutils.formatDate(item))
    },
    dayslength() {
      return this.days.length
    }   
  },
  watch: {
    date (val) {
      this.dateFormatted = this.dates.map(item => dateutils.formatDate(item))
    },
    dates (val) {
      dateutils.formatDate(this.date)
    },
  }, 
  methods: {
     async onSubmit() {
      const formData = {        
        date: this.dateFormatted
      }
    /*   console.log(formData) */
    try {
      this.days = await this.$store.dispatch('days/fetchDaysRange', formData.date)
    } catch (error) {
      throw error
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