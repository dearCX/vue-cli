<template>
  <div>
    <section id="ev">
      目标元素
    </section>
  </div>
</template>
<script>
// var ev = document.getElementById('ev')
window.addEventListener('click', function(){
  window.console.log('window capture')
}, true)
document.addEventListener('click', function(){
  window.console.log('document capture')
}, true)
document.documentElement.addEventListener('click', function(){
  window.console.log('html capture')
}, true)
document.body.addEventListener('click', function(){
  window.console.log('body capture')
}, true)
// ev.addEventListener('click', function(){
//   window.console.log('ev capture')
// }, true)

// 自定义事件
/* 
var test = new Event('test')
ev.addEventListener('test', function(){
  console.log('test事件')
}, false)
ev.dispatchEvent(test)
*/
export default {
  name: 'event',
  data () {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
#ev{
  width: 300px;
  height: 200px;
  background-color: purple;
  color: #fff;
  text-align: center;
  line-height: 200px;
}
</style>
