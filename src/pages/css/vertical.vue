<template>
<div>
  <div id="box">
    <div id="elem"></div>
  </div>
  <div id="box2">
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate provident porro cumque. Commodi adipisci facilis vitae magnam aliquam vel nulla sed ducimus accusamus dicta esse numquam nostrum non, debitis harum.</p>
  </div>
</div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
#box{
  width: 100%;
  height: 400px;
  border:2px solid green;
}
#elem{
  width: 100px;
  height: 100px;
  margin: 0 auto;
  background-color: orange;
  position: relative;
  top: 50%;
  margin-top: -50px;
}
#box2{
  height: 200px;
  margin-top: 20px;
  border:2px solid green;
  display: table;
}
#box2 p{
  display:table-cell;
  vertical-align: middle;
}
// #box2{
//   height: 200px;
//   line-height: 200px;
//   margin-top: 20px;
//   border:2px solid green;
// }
// #box2 p{
//   display: inline-block;
//   line-height: 20px;
//   vertical-align: middle;
// }
</style>


