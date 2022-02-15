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
          name="date"
          :max="maxDate"
          @input="menu2 = false"
          locale="ru-Ru"
          first-day-of-week="1"
        ></v-date-picker>
      </v-menu>
       <v-radio-group v-model="radioAdmin">
         <label for="">Выберите админа:</label>
        <v-radio
          v-for="admin in admins"
          :key="admin._id"
          :label="admin.name"
          :value="admin.name"
          name="admin"
        ></v-radio>
      </v-radio-group>
      <v-btn
        class="mr-4 primary"
        type="submit"
        
      >
        Создать
      </v-btn>
     
    </v-form>
  </div>
</template>

<script>
import dateutils from '@/utils/date.utils'
export default {
  async asyncData({store}) {
    const admins = await store.dispatch('admins/fetchAdmins')
    console.log(admins)
    return {admins}
  },
  data() {
    return {
      date: dateutils.getCurrentDate(),
      dateFormatted: dateutils.formatDate(dateutils.getCurrentDate()),
      maxDate: '',
      radioAdmin: '',
      valid: false,   
      menu2: false,   
      invalid: 0
    }
  },
  computed: {
    computedDateFormatted () {
      return dateutils.formatDate(this.date)
    }
  },
  watch: {
    date (val) {
      this.dateFormatted = dateutils.formatDate(this.date)
    },
  },
  methods: {
    onSubmit() {
      const formData = {
        id: this.dateFormatted,
        date: this.dateFormatted,
        admin: this.radioAdmin,       
      }
      /* console.log(formData) */
      /* this.$store.commit('days/addDay', formData) */
      
    }
  },
 
  mounted() {
   /*  this.radioAdmin = this.admins[0].id
    this.maxDate = this.date */
  }
}
</script>

<style>

</style>