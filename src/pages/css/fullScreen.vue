<template>
  <div id="box">
    <div class="item">1</div>
    <div class="item1">2</div>
    <div class="item2">3</div>
    <div class="item3">4</div>
    <div class="item">5</div>
    <div class="item2">6</div>
    <div class="item">7</div>
    <div class="item1">8</div>
    <div class="item">9</div>
    <div class="item5">10</div>
    <div class="item">11</div>
  </div>
</template>
<script>
export default {
  name:'fullScreen',
  data () {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
/*column多列布局
#box{
  // width: 900px;
  column-count: 3;
  column-gap: 5;
  border:1px solid #ccc;
}
#box>div{
  margin-bottom: 10px;
  break-inside: avoid;
}
.item{
  height: 200px;
  border:1px solid red;
}
.item1{
  height: 300px;
  border:1px solid green;
}
.item2{
  height: 400px;
  border:1px solid blue;
}
.item3{
  height: 500px;
  border:1px solid yellow;
}
.item4{
  height: 600px;
  border:1px solid purple;
}
.item5{
  height: 700px;
  border:1px solid orange;
}
*/
//flex布局
#box{
  // width: 100%;
  border:1px solid #ccc;
  display: flex;
  flex-flow: column wrap;
  height: 1600px;
}
#box>div{
  margin: 10px;
  width: calc(100%/3 - 20px);
}
.item{
  height: 200px;
  border:1px solid red;
}
.item1{
  height: 300px;
  border:1px solid green;
}
.item2{
  height: 400px;
  border:1px solid blue;
}
.item3{
  height: 500px;
  border:1px solid yellow;
}
.item4{
  height: 600px;
  border:1px solid purple;
}
.item5{
  height: 700px;
  border:1px solid orange;
}
</style>


