<template>
  <div>
    <div>
      
      <v-data-table
            :headers="headers"
            :items="orders"
            :items-per-page="-1"
            class="elevation-1"
            :class="{tablesuccess: isfound}"
            v-show="show"
            :loading="loadTable"
            loading-text="Загрузка..."
          >
          <template v-slot:header="" >
              <thead>
                <tr>
                  <th rowspan="2">#</th>
                  <th rowspan="2">Дата</th>
                  <th rowspan="2">Админ</th>
                  <th rowspan="2">Откуда</th>
                  <th rowspan="2">Телефон</th>
                  <th rowspan="2">Имя</th>
                  <th colspan="11" rowspan="1">Заказ</th>
                  <th rowspan="2">Сумма</th>
                  <th rowspan="2">Скидка 1</th>
                  <th rowspan="2">Мастер</th>
                  <th rowspan="2">Продажа</th>
                  <th rowspan="2">Скидка 2</th>
                  <th rowspan="2">Итог</th>
                  <th rowspan="2">О заказе</th>
                  <th rowspan="2">О клиенте</th>
                  <th rowspan="2">ЧС</th>
                  <th rowspan="2">Курьер</th>
                  <th rowspan="2">Оплата</th>
                  <th rowspan="2" v-if="editable">Изменить</th>
                </tr>
                <!-- <tr>
                  <th v-for="label in orderlabels" :key="label">
                    {{ label }}
                  </th>
                </tr> -->

                <tr>
                  <th>100</th>
                  <th>150</th>
                  <th>200</th>
                  <th>250</th>
                  <th>300</th>
                  <th>350</th>
                  <th>400</th>
                  <th>450</th>
                  <th>500</th>
                  <th>550</th>
                  <th>600</th>
                </tr>
                
              </thead>
            </template>
            <template v-slot:item="props">
              <tr 
                :class="{'bgred': (props.item.blacklist && props.item.blacklist != '') }"
              >
                <td>{{ props.item.number || orders.indexOf(props.item) + 1 }}</td>
                <td>{{ props.item.date | date('date') }}</td>
                <td>{{ props.item.admin }}</td>
                <td>{{ props.item.from }}</td>
                <td>{{ props.item.phone }}</td>
                <!-- <td v-for="prop in props.item.cart" :key="prop.id">
                  {{ prop.count }}
                </td> -->
                <td>{{ props.item.name }}</td>
                <td>{{ props.item.n100 }}</td>
                <td>{{ props.item.n150 }}</td>
                <td>{{ props.item.n200 }}</td>
                <td>{{ props.item.n250 }}</td>
                <td>{{ props.item.n300 }}</td>
                <td>{{ props.item.n350 }}</td>
                <td>{{ props.item.n400 }}</td>
                <td>{{ props.item.n450 }}</td>
                <td>{{ props.item.n500 }}</td>
                <td>{{ props.item.n550 }}</td>
                <td>{{ props.item.n600 }}</td>
                  <td>{{ props.item.summ | price('price') }}</td> 
                <td>{{ props.item.percent1 }}</td> 
                
                <td>{{ props.item.master }}</td> 
                <td>{{ props.item.sale | price('price') }}</td> 
                <td>{{ props.item.percent2 }}</td> 
                <td>{{ props.item.total | price('price') }}</td>          
                <td class="td--comment">{{ props.item.commentOrder }}</td> 
                <td class="td--comment">{{ props.item.commentClient }}</td> 
                <td>{{ props.item.blacklist }}</td> 
                <td>{{ props.item.courier }}</td> 
                <td>{{ props.item.courierSumm }}</td> 
                <td v-if="editable" colspan="100%" class="center button">
                  <span @click.stop="showedit(props.item._id)">
                    <v-icon center color="#1976d2" >mdi-pencil-box-multiple</v-icon>
                  </span>
                </td>
              </tr>

              
            </template>
          </v-data-table>
          </div>

        <div v-if="editable">
          <v-dialog
            v-model="dialog"
            
            max-width="1920px"
          >
            <v-card>
              <v-card-title>
                <span class="text-h5">Редактрование данных</span>
              </v-card-title>
              <v-card-text>
                <app-edit :order="editing" :masters="masters" :couriers="couriers" @edited="edited" v-if="dialog"></app-edit>
              </v-card-text>
              
            </v-card>
          </v-dialog>
        </div>
     
  </div>
</template>

<script>
export default {
  props: {
    orders: {
      required: false
    },
    show: {
      required: false,
      default: true
    },
    isfound: {
      required: false,
      default: false
    },
    editable: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      headers: [],
      toedit: '',
      dialog: false,
      masters: [],
      couriers: [],
      loadTable: true
    }
  }, 
  methods: {
    async showedit(id) {
      this.toedit = id; 
      this.dialog = true;      
      this.masters = await this.$store.dispatch('masters/fetchMasters')
      this.couriers = await this.$store.dispatch('couriers/fetchCouriers')
    },
    edited() {
      this.dialog = false
      this.toedit = null
    }
  },  
  watch: {
    
  },
  beforeMount() {
    
  },
  mounted() {
    this.loadTable = false;
  },
 
  computed: {
    editing() {
      return this.toedit
    }
  }
}
</script>

<style scoped>
td {
  max-width: 120px;
}
table, tbody, tr {
  width: 100% !important;
}
  .theme--light.v-data-table.tablesuccess, .v-data-table.tablesuccess {
    background: #e9ffe5;
  }
  .fade-enter-active {
     transition: 0;
  } 
  .fade-leave-active {
    transition: max-height .5s;
  }
  .fade-enter, .fade-leave-to  {
    max-height: 0;
  }
  .bgred {
    background: #ffe9e9;
  }
  .v-data-footer {
    display: none !important;
  }
  .v-data-table__wrapper thead {
    background: aliceblue;
  }
  .center {
    text-align: center;
  }
  .button i {
   cursor: pointer;
  }
</style>