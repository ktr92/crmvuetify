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
            v-model="dateRangeText"
            label="Выберите день"
            prepend-icon="mdi-calendar"
            name="date"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="dates"
          name="dates"
          :max="maxDate"
          locale="ru-Ru"
          first-day-of-week="1"
          range
        ></v-date-picker>
      </v-menu>
      <v-btn
        class="mr-4 primary"
        type="submit"
        
      >
        Обновить
      </v-btn>
     
    </v-form>
    <div>
      <div v-if="ready">
          <app-stats :orders="days" :header="headers" :isfound="0" v-if="checkinfo"></app-stats>
          <app-adminstats :orders="days" :isfound="0" v-show="checkinfo"></app-adminstats>
          <app-masterstats :orders="days" :isfound="0" v-show="checkinfo"></app-masterstats>
          <app-suborders :orders="days" :show="checkinfo" :isfound="0" v-if="dayslength"></app-suborders>          
          <div v-else>Данных за этот день не найдено</div>
        </div>
        <div class="wrapper" v-else>
          <AppLoading :inblock="true"/>
        </div>
     </div> 

</div>
 <!--  <app-table :items="days" :headers="headers"></app-table> -->

</template>

<script>
import AppTable from '~/components/AppTable.vue'
import dateutils from '@/utils/date.utils'
import AppLoading from '@/components/AppLoading.vue'

export default {
  components: { AppTable, AppLoading },
  async asyncData({store}) {
    let ready = 0
    let datestr = dateutils.getCurrentDate()
    const days = await store.dispatch('days/fetchDay', dateutils.formatIso(datestr).slice(0,10))
    ready = 1
    return {days, ready}
  },
  data() {
    return {
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      dates: [
        (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10), 
        (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
        ],
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
    },
    dateRangeText () {
      return this.dates
    },
  },
  watch: {
    date (val) {
     /*  this.dateFormatted = this.dates.map(item => dateutils.formatDate(item)) */
    },
    dates (val) {
     /*  dateutils.formatDate(this.date) */
    },
  }, 
  methods: {
     async onSubmit() {
       this.ready = 0 
        const formData = {        
          dates: this.dates.sort((a, b) => new Date(a) - new Date(b))
        }
      /*   console.log(formData) */
      try {
        this.days = await this.$store.dispatch('days/fetchDay', formData.dates)
      } catch (error) {
        throw error
      }
      this.ready =  1
     
      
    }
  },
  mounted() {
   
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
  .wrapper {
    position: relative;
  }
  .v-data-footer {
    display: none !important;
  }
</style>