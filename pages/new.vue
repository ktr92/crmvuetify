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
            v-model="date"
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
          @input="menu2 = false"
        ></v-date-picker>
      </v-menu>
       <v-radio-group v-model="radioAdmin">
         <label for="">Выберите админа:</label>
        <v-radio
          v-for="admin in admins"
          :key="admin.id"
          :label="admin.name"
          :value="admin.id"
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
export default {
  asyncData({store}) {
    const admins = store.getters['admins/admins']
    return {admins}
  },
  data() {
    return {
      admins: [],
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      radioAdmin: '',
      valid: false,   
      menu2: false,   
      invalid: 0
    }
  },
  actions: {

  },
  methods: {
    onSubmit() {
      console.log(this.admins[0])
      const formData = {
        admin: this.radioAdmin,
        date: this.date
      }
      console.log(formData)
    }
  },
  mounted() {
    this.radioAdmin = this.admins[0].id
  }
}
</script>

<style>

</style>