function getCurrentDate() {
  return (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString()
}

function formatDate(date) {
  if (!date) return null
  const [year, month, day] = date.split('-')
  return `${day}.${month}.${year}`
}

function formatIso(datestr) {
  let date = datestr/* .split(".") */
  var tzoffset = (new Date()).getTimezoneOffset() * 60000;
  var dateformat = (new Date(new Date() - tzoffset)).toISOString()
 /*  var dateformat = (new Date(new Date(date[2], date[1] - 1, date[0]) - tzoffset)).toISOString() */
  return dateformat
}

export default  {getCurrentDate, formatDate, formatIso}