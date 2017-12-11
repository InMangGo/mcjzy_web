// 货币格式化
import monent from 'moment'

const currency = value => {
  return value.toLocaleString('zh-CN', { style: 'currency', currency: 'CNY' })
}

// 时间格式化
const dateTimeFormat = monent
const dateTime = value => {
  return dateTimeFormat(value).format('LLLL')
}

export default {
  currency: currency,
  dateTime: dateTime
}
