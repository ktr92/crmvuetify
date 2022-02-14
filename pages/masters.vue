<template>
  <div>
    <v-card>
     <v-form v-model="valid" @submit.prevent="onSubmit">
       <v-text-field
          v-model="name"
          label="Имя"
          :rules="nameRules"
          required
        ></v-text-field>
          <v-btn
          class="mr-4 primary"
          type="submit"
          :disabled="!valid"
          >
            Добавить
        </v-btn>
     </v-form>
    </v-card>
    <app-table :headers="headers" :items="masters"></app-table>
  </div>
</template>

<script>
import AppTable from '@/components/AppTable.vue'

export default {
  async asyncData({store}) {
    const masters = await store.dispatch('masters/fetchMasters')
    return {masters}
  },
  data() {
    return {
      valid: false,
      nameRules: [
        v => !!v || 'Обязательное поле'       
      ],
      name: '',
      headers: [
        {
          text: "Имя",
          value: 'name'
        }
      ],
      items: [
        
      ]
    }
  },
  methods: {
    async onSubmit() {
      const formData = {
        name: this.name
      }
      try {
        await this.$store.dispatch('masters/newMaster', formData)
        this.masters.push(formData)
        this.$notify({         
          title: 'Новый мастер успешно добавлен!',
          type: 'success',
          duration: 4000,         
        })
        this.name = ' '
        
      } catch (error) {
        if (this.$store.getters.error.status === 409) {
          this.$notify({         
            title: 'Такой мастер уже есть!',
            type: 'warn',
            duration: 4000,         
          })
        }
        else {
          this.$notify({         
          title: 'Произошла ошибка.',
          type: 'error',
          duration: 4000,         
        })
        }
        
      }
     
      
    }
  },
  components: {AppTable}
}
</script>

<style>
   .v-card {
    padding: 20px;
    margin-bottom: 30px;
  }
</style>