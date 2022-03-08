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
                  v-model="from"
                  label="Откуда"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model="phone"
                  v-mask="'8##########'"
                  class="input-phone requiredfield"
                  label="Телефон"
                  :rules="phoneRules"
                  required
                  @change="clientInfo"
                ></v-text-field>
              </td>
              <td>
                 <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="Имя"
                    class="requiredfield"
                    required
                  ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model.number="n100"
                  label="100"
                  type="number" min="0"
                  class="input-count"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model.number="n150"
                  label="150"
                  type="number" min="0"
                  class="input-count"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model.number="n200"
                  label="200"
                  type="number" min="0"
                  class="input-count"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model.number="n250"
                  label="250"
                  type="number" min="0"
                  class="input-count"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model.number="n300"
                  label="300"
                  type="number" min="0"
                  class="input-count"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model.number="n350"
                  label="350"
                  type="number" min="0"
                  class="input-count"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model.number="n400"
                  label="400"
                  type="number" min="0"
                  class="input-count"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model.number="n450"
                  label="450"
                  type="number" min="0"
                  class="input-count"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model.number="n500"
                  label="500"
                  type="number" min="0"
                  class="input-count"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model.number="n550"
                  label="550"
                  type="number" min="0"
                  class="input-count"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model.number="n600"
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
                  v-model.number="percent1"
                  label="Скидка 1"
                  min="0"
                ></v-text-field>
              </td>
              <td>
                <v-select
                  class="requiredfield"
                  :items="masters"
                  :rules="selectRules"
                  v-model="master"
                  required
                  label="Мастер"
                  item-text="name"
                  item-value="first"
                ></v-select>
              </td>
              <td>
                <v-text-field
                  v-model.number="sale"
                  min="0"
                  label="Продажа"
                  type="number"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model.number="percent2"
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
                v-model="commentOrder"
                label="О заказе"
              ></v-textarea>
              </td>
              <td>
                <v-textarea
                rows="1"
                v-model="commentClient"
                label="О клиенте"
              ></v-textarea>
              </td>
             <td>
                <v-select
                  :items="blacklists"
                  label="ЧС"
                  v-model="blacklist"
                  item-value="first"
                ></v-select>
              </td>
              <td>
                <v-select
                  :items="couriers"
                  label="Курьер"
                  v-model="courier"
                  
                  item-text="name"
                ></v-select>
              </td>
              <td>
                <v-text-field
                  v-model.number="courierSumm"
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
        Добавить
      </v-btn>
      <v-btn
        class="error" 
        @click="clear">
        Очистить 
      </v-btn>
     </v-form>
     <app-orders :orders="info" :show="checkinfo" :isfound="1"></app-orders>
     <br>
  </div>
</template>

<script>
import AppOrders from '@/components/AppOrders'
import dateutils from '@/utils/date.utils'

export default {
  async asynData() {
   
  },
  components: {AppOrders},
  props: ['masters', 'couriers'],
  data() {
    return {
      info: [],
      headers: [],
      valid: false,
      name: '',
      phone: '',
      from: '',
      n100: '',
      n150: '',
      n200: '',
      n250: '',
      n300: '',
      n350: '',
      n400: '',
      n450: '',
      n500: '',
      n550: '',
      n600: '',
      percent1: '',
      sale: '',
      percent2: '',
      commentOrder: '',
      commentClient: '',
      master: '',
      courier: '',
      courierSumm: '',
    /*   locations: ['Курская', 'Парк'], */
      blacklists: ['', 'Да'],
     /*  location: 'Курская', */
      blacklist: '',
      nameRules: [
        v => !!v || 'Обязательное поле'       
      ],
      phoneRules: [
        v => v.length === 11 || 'Некорректный номер'
      ],
      selectRules: [
        v => v.length > 1 || 'Не выбран'
      ]
     
    }
  },
  computed: {
    summ: {
      get() {
        return this.n100*100 + this.n150*150 + this.n200*200 + this.n250*250 + this.n300*300 + this.n350*350 + this.n400*400 + this.n450*450 + this.n500*500 + this.n550*550 + this.n600*600 
      },
      set(val) {
        this.value = val
      }  
    },
     total:  {
      get() {
        return this.summ + this.sale - this.percent1 - this.percent2
      },
      set(val) {
        this.value = val
      }   
     },
     phonecheck:
     {
       get() {
        return this.phone.length || 0
       },
       set(val) {
        this.value = val
      }   
     },
     checkinfo: {
       get() {
        return this.info.length || 0
       },
       set(val) {
        this.value = val
       } 
     }   
  },
  methods: {
    async clientInfo() {
      try {
        if (this.phonecheck === 11) {
          this.info = await this.$store.dispatch('days/clientinfo', Number(this.phone))
        } 
        else {
          this.info = []
        }
      } catch (error) {
        throw(error)
      }
    },
    clear() {
      this.$refs.form.reset()
      this.info = []
    },
    async onSubmit() {
      
      try {
        const formData = {
         /*  date: this.$store.getters.day, */
          date: dateutils.getCurrentDate().slice(0, 10),
          admin: this.$store.getters.admin,
          name: this.name,
          phone: Number(this.phone),
          from: this.from || '',
          n100: this.n100 || 0,
          n150: this.n150 || 0,
          n200: this.n200 || 0,
          n250: this.n250 || 0,
          n300: this.n300 || 0,
          n350: this.n350 || 0,
          n400: this.n400 || 0,
          n450: this.n450 || 0,
          n500: this.n500 || 0,
          n550: this.n550 || 0,
          n600: this.n600 || 0,
          percent1: this.percent1 || 0,
          summ: this.summ || 0,
          sale: this.sale || 0,
          percent2: this.percent2 || 0,
          total: this.total || 0,
          commentOrder: this.commentOrder || '',
          commentClient: this.commentClient || '',
         /*  location: this.location, */
          master: this.master,
          courier: this.courier || '',
          blacklist: this.blacklist,
          courierSumm: this.courierSumm || 0
        }
      await this.$store.dispatch('days/addRow', formData)      
      this.$store.dispatch('days/addDay', formData)
      this.$refs.form.reset()
      this.phone = ''
      this.master = ''
      this.courier = ''
      this.info = []
      await this.$emit('refresh')
      this.$notify({         
          title: 'Готово!',
          type: 'success',
          duration: 4000,         
        })
      } catch (error) {
          console.error(error.message)
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

