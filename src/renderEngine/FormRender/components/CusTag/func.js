// 调整字段值
export const changeField = function (e, field) {
  e = e || ''
  const value = _.isString(e) || _.isNumber(e) || _.isArray(e) ? e : _.safeGet(() => e.target.value, e)
  const errmsg = field == 'value' && this.item.require && !value ? this.item.placeholder : ''
  let formList = _.searchCover(this.formList, {id: this.item.id}, v => ({...v, [field]: value, errmsg}))
  this.$emit('setFormList', formList)
}
// 确认标签
export const confirmTag = function (e) {
  console.log(e)
}
// 调整标签值
export const setChronicDieaseArr = function (e) {
  this.changeField(e, 'value')
}