<template>
<div>
  <h2>Выберите Админа на сегодня.</h2>
   <v-form @submit.prevent="onSubmit"
    >
       <v-radio-group v-model="radioAdmin">
         <label for=""></label>
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
export default {
  props: ['admins', 'day'],
  data() {
    return {
      radioAdmin: ''
    }
  },
  methods: {
    onSubmit() {
      /* console.log(this.day, this.radioAdmin) */
      this.$store.dispatch('setday', this.day)
      this.$store.dispatch('setadmin', this.radioAdmin)
    }
  }
}
</script>

<style>

</style>