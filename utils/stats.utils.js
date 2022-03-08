function setMasterStat(data) {
  const _ = require("lodash");
  let result = {...data}

  result.mastersGroup = _.groupBy(result.days, day => day.master)  
  result.masterStats = []
  for (let item in result.mastersGroup) {
    let master = {}
    master.name = item
    master.summ = _.sumBy(result.mastersGroup[item], 'summ')
    master.count = _.sum(
      [
        _.sumBy(result.mastersGroup[item], 'n100'),
        _.sumBy(result.mastersGroup[item], 'n150'),
        _.sumBy(result.mastersGroup[item], 'n200'),
        _.sumBy(result.mastersGroup[item], 'n250'),
        _.sumBy(result.mastersGroup[item], 'n300'),
        _.sumBy(result.mastersGroup[item], 'n350'),
        _.sumBy(result.mastersGroup[item], 'n400'),
        _.sumBy(result.mastersGroup[item], 'n450'),
        _.sumBy(result.mastersGroup[item], 'n500'),
        _.sumBy(result.mastersGroup[item], 'n550'),
        _.sumBy(result.mastersGroup[item], 'n600'),
        _.sumBy(result.mastersGroup[item], 'n650')
      ])
    master.clients = result.mastersGroup[item].length  
    result.masterStats.push(master)  
  }
  return result
}
function setAdminStat(data) {
  const _ = require("lodash");
  let result = {...data}
  result.adminsGroup = _.groupBy(result.days, day => day.admin)  
  result.adminStats = []
  for (let item in result.adminsGroup) {
    let admin = {}
    admin.name = item
    admin.clients = result.adminsGroup[item].length  
    admin.days = Object.keys(_.groupBy(result.adminsGroup[item], el => el.date)).length
    admin.summ = _.sumBy(result.adminsGroup[item], 'summ')
    admin.sale = _.sumBy(result.adminsGroup[item], 'sale')
    admin.total = _.sumBy(result.adminsGroup[item], 'total')
    result.adminStats.push(admin)  
  }
  return result
}
function setCourierStat(data) {
  const _ = require("lodash");
  let result = {...data}
  result.courierGroup = _.groupBy(result.days, day => day.courier)  
  result.courierStats = []
  for (let item in result.courierGroup) {
    let courier = {}
    courier.name = item
    courier.summ = _.sumBy(result.courierGroup[item], 'courierSumm')
    courier.clients = result.courierGroup[item].length  
    result.courierStats.push(courier)  
  }
  return result
}
function setDaysStat(data) {
  const _ = require("lodash");
  let result = {...data}
  result.daysStats = {}
  result.daysStats.clients = result.days.length  
  result.daysStats.summ = _.sumBy(result.days, 'summ')
  result.daysStats.sale = _.sumBy(result.days, 'sale')
  result.daysStats.total = _.sumBy(result.days, 'total')
  result.daysStats.couriers = _.sumBy(result.days, 'courierSumm')
  return result
}


export default {setMasterStat, setAdminStat, setCourierStat, setDaysStat}