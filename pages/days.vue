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
    <app-loading :inblock="true" v-if="loading"></app-loading>
    <div v-else>
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
            <keep-alive>

              
        <v-tabs-items v-model="tab"  v-if="dayslength">
          <v-tab-item :eager="true">
            <v-card flat>
             <!--  <app-stats :orders="days" :header="headers" :isfound="0" v-if="checkinfo"></app-stats> -->
              <app-suborders :orders="stat" :show="checkinfo" :isfound="0"></app-suborders>   
            </v-card>
          </v-tab-item>
          <v-tab-item :eager="true">
            <v-card flat>
              <app-adminstats :orders="adminstat" :isfound="0" v-show="checkinfo"></app-adminstats>
            </v-card>
          </v-tab-item>
          <v-tab-item :eager="true">
            <v-card flat>             
              <app-masterstats :orders="masterstat" :isfound="0" v-show="checkinfo"></app-masterstats>
            </v-card>
          </v-tab-item>
          <v-tab-item :eager="true">
            <v-card flat>             
              <app-courierstats :orders="courierstat" :isfound="0" v-show="checkinfo"></app-courierstats>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
         <div v-else>
          <v-alert
              border="top"
              color="red lighten-2"
              dark
            >
              Нет данных за выбранный период
            </v-alert>
          </div>
            </keep-alive>


        </v-card>
         
        </div>       
     </div> 
</div>
</template>

<script>
import AppTable from '~/components/AppTable.vue'
import AppLoading from '~/components/AppLoading.vue'
import dateutils from '@/utils/date.utils'
import statsutils from '@/utils/stats.utils'

export default {
  components: { AppTable, AppLoading },
  async asyncData({store}) {
    let datestr = dateutils.getCurrentDate()
    const days = await store.dispatch('days/fetchDayStat', dateutils.formatIso(datestr).slice(0,10))
   /*  const adminstat = await store.dispatch('days/fetchAdminStat', dateutils.getCurrentDateSplit(datestr)) */
    const adminstat = statsutils.setAdminStat(days)
    /* const masterstat = await store.dispatch('days/fetchMasterStat', dateutils.getCurrentDateSplit(datestr)) */
    const masterstat = statsutils.setMasterStat(days)
    const stat = statsutils.setDaysStat(days)
   /*  const stat = await store.dispatch('days/fetchStat', dateutils.getCurrentDateSplit(datestr)) */
/*     const courierstat = await store.dispatch('days/fetchCourierStat', dateutils.getCurrentDateSplit(datestr))
 */    const courierstat = statsutils.setCourierStat(days)
    return {adminstat, masterstat, stat, courierstat}
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
      loading: true,
      tabs: [
        'Клиенты', 'Админы', 'Мастера', 'Курьеры'
      ]
    }
  },
  computed: {
    checkinfo: {
       get() {
        return this.stat.days.length || 0
       },
       set(val) {
        this.value = val
      }   
     },
    dayslength() {
      return this.stat.days.length
    },
    dateRangeText () {
      return this.dates
    },
  },
  methods: {
     async onSubmit() {
        this.loading = true
       
        const formData = {        
          dates: this.dates.sort((a, b) => new Date(a) - new Date(b))
        }
        try {
          this.days = await this.$store.dispatch('days/fetchDayStat', formData.dates)
          this.masterstat = statsutils.setMasterStat(this.days)
          this.adminstat = statsutils.setAdminStat(this.days)
          this.courierstat = statsutils.setCourierStat(this.days)
          this.stat = statsutils.setDaysStat(this.days)
        } catch (error) {
          throw error
        }
        this.loading = false
    }
  },
  mounted() {
    this.loading = false
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
  .v-window-item {
    display: block !important;
    opacity: 0;
    height: 0;
}
  .v-window-item.v-window-item--active {
    opacity: 1;
    height: initial;
}



.v-tabs {
  margin-bottom: 10px;
}

</style>