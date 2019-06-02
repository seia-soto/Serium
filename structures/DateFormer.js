const dayMap = ['일', '월', '화', '수', '목', '금', '토']

const convert12HourFormat = hourNumber => {
  const meridiem = (hourNumber >= 12) ? '오후' : '오전'
  const hours = (hourNumber % 12) ? (hourNumber % 12) : 12

  return `${meridiem} ${hours}`
}
const DateFormer = dateObject => {
  // NOTE: dateObject can be timestamp.
  dateObject = new Date(dateObject)

  return `${dateObject.getFullYear()}년` +
    ` ${dateObject.getMonth() + 1}월` +
    ` ${dateObject.getDate()}일` +
    ` ${dayMap[dateObject.getDay()]}요일` +
    ` ${convert12HourFormat(dateObject.getHours())}시` +
    ` ${dateObject.getMinutes()}분` +
    ` ${dateObject.getSeconds()}초`
}

module.exports = DateFormer
module.exports.convert12HourFormat = convert12HourFormat
