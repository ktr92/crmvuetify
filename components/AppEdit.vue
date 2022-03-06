<template>
  <div>
     <v-form 
      v-model="valid"
      ref="form" 
      @submit.prevent="onSubmit">
      <v-simple-table>
        <template v-slot:default>
          <tbody>
            <tr>
              <td>
                <v-text-field
                  v-model="edit.from"
                  label="Откуда"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model="edit.phone"
                  v-mask="'8##########'"
                  class="input-phone requiredfield"
                  label="Телефон"
                  :rules="phoneRules"
                  required
                ></v-text-field>
              </td>
              <td>
                 <v-text-field
                    v-model="edit.name"
                    :rules="nameRules"
                    label="Имя"
                    class="requiredfield"
                    required
                  ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model.number="edit.n100"
                  label="100"
                  type="number" min="0"
                  class="input-count"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model.number="edit.n150"
                  label="150"
                  type="number" min="0"
                  class="input-count"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model.number="edit.n200"
                  label="200"
                  type="number" min="0"
                  class="input-count"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model.number="edit.n250"
                  label="250"
                  type="number" min="0"
                  class="input-count"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model.number="edit.n300"
                  label="300"
                  type="number" min="0"
                  class="input-count"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model.number="edit.n350"
                  label="350"
                  type="number" min="0"
                  class="input-count"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model.number="edit.n400"
                  label="400"
                  type="number" min="0"
                  class="input-count"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model.number="edit.n450"
                  label="450"
                  type="number" min="0"
                  class="input-count"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model.number="edit.n500"
                  label="500"
                  type="number" min="0"
                  class="input-count"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model.number="edit.n550"
                  label="550"
                  type="number" min="0"
                  class="input-count"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model.number="edit.n600"
                  label="600"
                  type="number" min="0"
                  class="input-count"
                ></v-text-field>
              </td>
              
              
               <td>
                <v-text-field
                  v-model.number="summ"
                  label="Сумма заказа"
                  min="0"
                  disabled
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model.number="edit.percent1"
                  label="Скидка 1"
                  min="0"
                ></v-text-field>
              </td>
              <td>
                <v-select
                  class="requiredfield"
                  :items="masters"
                  :rules="selectRules"
                  v-model="edit.master"
                  required
                  label="Мастер"
                  item-text="name"
                  item-value="first"
                ></v-select>
              </td>
              <td>
                <v-text-field
                  v-model.number="edit.sale"
                  min="0"
                  label="Продажа"
                  type="number"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model.number="edit.percent2"
                  min="0"
                  label="Скидка 2"
                ></v-text-field>
              </td>
              
              <td>
                <v-text-field
                  v-model.number="total"
                  min="0"
                  label="Итого"
                  disabled
                ></v-text-field>
              </td>
              <td>
                <v-textarea
                rows="1"
                v-model="edit.commentOrder"
                label="О заказе"
              ></v-textarea>
              </td>
              <td>
                <v-textarea
                rows="1"
                v-model="edit.commentClient"
                label="О клиенте"
              ></v-textarea>
              </td>
             <td>
                <v-select
                  :items="blacklists"
                  label="ЧС"
                  v-model="edit.blacklist"
                  item-value="first"
                ></v-select>
              </td>
              <td>
                <v-select
                  :items="couriers"
                  label="Курьер"
                  v-model="edit.courier"
                  
                  item-text="name"
                ></v-select>
              </td>
              <td>
                <v-text-field
                  v-model.number="edit.courierSumm"
                  label="Оплата"
                  type="number" min="0"
                ></v-text-field>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <br>
      <v-btn
        class="mr-4 primary"
        type="submit"
        :disabled="!valid"
      >
        Сохранить
      </v-btn>
      
     </v-form>
     <br>
  </div>
</template>

<script>
import dateutils from '@/utils/date.utils'

export default {
  props: ['masters', 'couriers', 'order'],
  name: "AppEdit",
  data() {
    return {
      edit: {},
        headers: [],
        valid: false,
      
      /*   locations: ['Курская', 'Парк'], */
        blacklists: ['', 'Да'],
      /*  location: 'Курская', */
        blacklist: '',
        nameRules: [
          v => !!v || 'Обязательное поле'       
        ],
        phoneRules: [
          v => !!v && v.length === 11 || 'Некорректный номер'
        ],
        selectRules: [
          v => !!v && v.length > 1 || 'Не выбран'
        ]
    }
  },
  mounted() {
    this.edit = {...this.obj}
  },
  watch: {
    obj: function() {
      this.edit = {...this.obj}
      this.edit.phone = this.edit.phone.toString()
    }
  }, 
  computed: {
    obj: {
      get() {   
        return {...this.$store.getters['days/daybyid'](this.order)[0]}
      },
      set(val) {
        this.value = val
      }      
    },    
    summ: {
      get() {
        return this.edit.n100*100 + this.edit.n150*150 + this.edit.n200*200 + this.edit.n250*250 + this.edit.n300*300 + this.edit.n350*350 + this.edit.n400*400 + this.edit.n450*450 + this.edit.n500*500 + this.edit.n550*550 + this.edit.n600*600 
      },
      set(val) {
        this.value = val
      }  
    },
     total:  {
      get() {
        return this.summ + this.edit.sale - this.edit.percent1 - this.edit.percent2
      },
      set(val) {
        this.value = val
      }   
     },
       
  },
  methods: {
    async onSubmit() {
      try {
        const formData = {
         /*  date: this.$store.getters.day, */
          _id: this.edit._id,
          date: dateutils.getCurrentDate().slice(0, 10),
          admin: this.$store.getters.admin,
          name: this.edit.name,
          phone: Number(this.edit.phone),
          from: this.edit.from || '',
          n100: this.edit.n100 || 0,
          n150: this.edit.n150 || 0,
          n200: this.edit.n200 || 0,
          n250: this.edit.n250 || 0,
          n300: this.edit.n300 || 0,
          n350: this.edit.n350 || 0,
          n400: this.edit.n400 || 0,
          n450: this.edit.n450 || 0,
          n500: this.edit.n500 || 0,
          n550: this.edit.n550 || 0,
          n600: this.edit.n600 || 0,
          percent1: this.edit.percent1 || 0,
          summ: this.summ || 0,
          sale: this.edit.sale || 0,
          percent2: this.edit.percent2 || 0,
          total: this.total || 0,
          commentOrder: this.edit.commentOrder || '',
          commentClient: this.edit.commentClient || '',
         /*  location: this.location, */
          master: this.edit.master,
          courier: this.edit.courier || '',
          blacklist: this.edit.blacklist,
          courierSumm: this.edit.courierSumm || 0
        }
      await this.$store.dispatch('days/updateRow', formData)
      this.$store.dispatch('days/updateDay', formData)
      this.$emit('edited', false)
 
      this.$notify({         
          title: 'Изменено!',
          type: 'success',
          duration: 4000,         
        })
      } catch (error) {
        console.log(error)
          this.$notify({         
          title: 'Произошла ошибка.',
          type: 'error',
          duration: 4000,         
        })
      }
      
    }
  }
}
</script>

<style >
  form .input-phone {
    min-width: 50px;
  }
  form .v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
    padding: 0 5px;
  }
  form  .input-count {
    width: 40px;
  }
  form.v-form {
    margin-bottom: 30px;
  }
  .v-list-item__title, .v-select__selection--comma {
    font-size: 0.8rem;
    width: max-content;
  }
  .v-list-item__content {
    padding: 4px 0;
  }
  .v-list-item {
    min-height: 30px;
  }
  
  .v-select__selections input {
    width: 40px;
     min-width: 40px;
  }
  .v-select__selection--comma + input {
   width: 0;
  }
  .requiredfield   .v-input__control > .v-input__slot:before {
        border-color: #ff5252 !important;
 
  }
  .requiredfield.v-input--is-label-active  .v-input__control > .v-input__slot:before {
        border-color: rgba(0, 0, 0, 0.42) !important;
  }
  .requiredfield .v-text-field .theme--light.v-label {
        color: #ff5252 !important;
 
  }

.requiredfield.v-input--is-label-active .v-text-field .v-label  {
        border-color: rgba(0, 0, 0, 0.42) !important;
  }


</style>

