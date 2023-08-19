import { getViewPos, range } from "@/common.js"
// 减少
export const sub = function (){
  const res = getViewPos(this.$refs.outBox)
  this.translateX = range(this.translateX + res.width, -1 * this.maxTranslateX, 0)
}
// 新增
export const add = function (){
  const res = getViewPos(this.$refs.outBox)
  this.translateX = range(this.translateX - res.width, -1 * this.maxTranslateX, 0)
}
// 鼠标滚动
export const mousewheel = function (e) {
  const { wheelDelta } = e
  if(wheelDelta >= 120) {
    this.sub()
  } else if (wheelDelta <= -120){
    this.add()
  }
  e.stopPropagation() // 阻止滚动的默认行为
  e.preventDefault() // 阻止滚动传递
}