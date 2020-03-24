<template>
  <div>
    <div class="parent">
      <div class="son1"></div>
      <div class="son2"></div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
// 方式1
/*
.son1{
  float: left;
  width: 200px;
  min-height: 400px;
  border:2px solid red;
}
.son2{
  min-height: 400px;
  border:2px solid green;
  display: flow-root;
  margin-left: 210px;
}
*/
.parent{
  display: flex;
}
.son1{
  width: 200px;
  min-height: 400px;
  border:2px solid red;
}
.son2{
  min-height: 400px;
  border:2px solid green;
  margin-left: 10px;
  flex: 1;
}
</style>


