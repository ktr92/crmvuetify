function getCurrentDate() {
  return (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
}

function formatDate(date) {
  if (!date) return null
  const [year, month, day] = date.split('-')
  return `${day}.${month}.${year}`
}

export default  {getCurrentDate, formatDate}