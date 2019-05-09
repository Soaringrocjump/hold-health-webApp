// 全局filter（过滤）方法
// 过滤器在{}、v-bind中使用，一般跟在'|'后面，将前面的结果作为入参
import {formatDate} from '../utils'
// import nationArr from '@/assets/js/nation'

//格式化时间yyyy-MM-dd hh:mm:ss
function formatterDateTime(value) {
  if (!value) return ''
  return formatDate(new Date(value), 'yyyy-MM-dd hh:mm:ss')
}

//格式化时间yyyy-MM-dd
function formatterDate(value) {
  if (!value) return ''
  return formatDate(new Date(value), 'yyyy-MM-dd')
}

//格式化时间yyyy-MM
function formatterMonth(value) {
  if (!value) return ''
  return formatDate(new Date(value), 'yyyy-MM')
}

//格式化金额 案例：1,237,878.71
function moneyFormat(val) {
  val = val / 10000;
  val = val.toString().replace(/\$|\,/g, '');
  if (isNaN(val)) {
    val = "0";
  }
  let sign = (val == (val = Math.abs(val)));
  val = Math.floor(val * 100 + 0.50000000001);
  let cents = val % 100;
  val = Math.floor(val / 100).toString();
  if (cents < 10) {
    cents = "0" + cents
  }
  for (var i = 0; i < Math.floor((val.length - (1 + i)) / 3); i++) {
    val = val.substring(0, val.length - (4 * i + 3)) + ',' + val.substring(val.length - (4 * i + 3));
  }

  return (((sign) ? '' : '-') + val + '.' + cents);
}

function matchNation(val){
  let nationArr = JSON.parse(localStorage.getItem('nationArr'))
  let selNation = nationArr.find(el => el.code == val)
  if(selNation){
    return selNation.name
  }
}

export {
  // formatDate,
  formatterDateTime,
  formatterDate,
  formatterMonth,
  moneyFormat,
  matchNation
}

