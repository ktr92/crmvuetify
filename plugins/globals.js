import Vue from 'vue'
import DateFilter from '@/common/date.filter'
import PriceFilter from '~/common/price.filter'

Vue.filter('date', DateFilter)
Vue.filter('price', PriceFilter)