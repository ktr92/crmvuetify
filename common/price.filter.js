export default (value) => {
  return new Intl.NumberFormat('ru-RU').format(value) + ' руб.'
}