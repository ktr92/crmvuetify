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
    <br/>
    <div>
      <div >
        <v-card>
            <v-tabs
              v-model="tab"
              align-with-title
            >
              <v-tab
                v-for="tab in tabs"
                :key="tab"
              >
                {{ tab }}
              </v-tab>
            </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-card flat>
             <!--  <app-stats :orders="days" :header="headers" :isfound="0" v-if="checkinfo"></app-stats> -->
              <app-suborders :orders="days" :show="checkinfo" :isfound="0" v-if="dayslength"></app-suborders>          
              <div v-else>Данных за этот день не найдено</div>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <app-adminstats :orders="days" :isfound="0" v-show="checkinfo"></app-adminstats>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>             
              <app-masterstats :orders="days" :isfound="0" v-show="checkinfo"></app-masterstats>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>             
              <app-courierstats :orders="days" :isfound="0" v-show="checkinfo"></app-courierstats>
            </v-card>
          </v-tab-item>
        </v-tabs-items>


        </v-card>
          
         
         
        </div>       
     </div> 
</div>
</template>

<script>
import AppTable from '~/components/AppTable.vue'
import dateutils from '@/utils/date.utils'
import AppLoader from '@/components/AppLoader.vue'

export default {
  components: { AppTable, AppLoader },
  async asyncData({store}) {
    let datestr = dateutils.getCurrentDate()
    const days = await store.dispatch('days/fetchDay', dateutils.formatIso(datestr).slice(0,10))
    return {days}
  },
  data() {
    return {

      date: dateutils.getCurrentDateSplit(),
      dates: [
        dateutils.getCurrentDateSplit(), 
        dateutils.getCurrentDateSplit()
        ],
      dateFormatted: dateutils.formatDate(dateutils.getCurrentDate()),
      maxDate: '',
      valid: false,   
      menu2: false, 
      headers: [],
      tab: null,
      tabs: [
        'Клиенты', 'Админы', 'Мастера', 'Курьеры'
      ]
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
    dayslength() {
      return this.days.length
    },
    dateRangeText () {
      return this.dates
    },
  },
  methods: {
     async onSubmit() {
       this.$nuxt.$loading.start()
        const formData = {        
          dates: this.dates.sort((a, b) => new Date(a) - new Date(b))
        }
      try {
        this.days = await this.$store.dispatch('days/fetchDay', formData.dates)
      } catch (error) {
        throw error
      }
      this.$nuxt.$loading.finish()
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
  .wrapper {
    position: relative;
  }
  .v-data-footer {
    display: none !important;
  }
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