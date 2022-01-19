<template>
  <div>
     <v-form v-model="valid">
      <v-simple-table>
        <template v-slot:default>
         
          <tbody>
            <tr>
              <td>
                 <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="Имя"
                    required
                  ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model="source"
                  label="Откуда"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model="phone"
                  label="Телефон"
                  :rules="nameRules"
                  required
                ></v-text-field>
              </td>
              
              <td>
                <v-text-field
                  v-model="order100"
                  label="100"
                  type="number" min="0"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model="order150"
                  label="150"
                  type="number" min="0"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model="order200"
                  label="200"
                  type="number" min="0"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model="order250"
                  label="250"
                  type="number" min="0"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model="order300"
                  label="300"
                  type="number" min="0"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model="order350"
                  label="350"
                  type="number" min="0"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model="order400"
                  label="400"
                  type="number" min="0"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model="order450"
                  label="450"
                  type="number" min="0"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model="order500"
                  label="500"
                  type="number" min="0"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model="order550"
                  label="550"
                  type="number" min="0"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model="order600"
                  label="600"
                  type="number" min="0"
                ></v-text-field>
              </td>
              
               <td>
                <v-text-field
                  v-model="ordersale"
                  label="Сумма заказа"
                  disabled
                ></v-text-field>
              </td>
              <td>
                <v-select
                  :items="masters"
                  label="Мастер"
                  
                ></v-select>
              </td>
              <td>
                <v-text-field
                  v-model="ordersale"
                  label="Продажа"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model="orderplus"
                  label="Доп"
                ></v-text-field>
              </td>
              
              <td>
                <v-text-field
                  v-model="orderminus"
                  label="Скидка"
                ></v-text-field>
              </td>
             
              <td>
                <v-text-field
                  v-model="total"
                  label="Итого"
                  disabled
                ></v-text-field>
              </td>
               <td>
                <v-textarea
                rows="1"
                v-model="comment"
                label="Комментарий"
              ></v-textarea>
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
     <br>
  </div>
</template>

<script>
export default {
  props: ['masters'],
  data() {
    return {
      valid: false,
      name: '',
      source: '',
      order100: '0',
      order150: '0',
      order200: '0',
      order250: '0',
      order300: '0',
      order350: '0',
      order400: '0',
      order450: '0',
      order500: '0',
      order550: '0',
      order600: '0',
      ordertotal: '0',
      ordersale: '0',
      orderplus: '0',
      orderminus: '0',
      total: '0',
      comment: '',
      status: '',
      phone: '',
      nameRules: [
        v => !!v || 'Обязательное поле'       
      ],
    }
  },
  methods: {
    clear() {

    },

  }
 
}
</script>

<style >
  form .v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
    padding: 0 5px;
  }
 
  form .v-data-table > .v-data-table__wrapper > table > tbody > tr > td input[type="number"] {
    max-width: 58px;
  }
</style>

