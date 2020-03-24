<template>
  <div class="parent">
    <div id="middle" class="son">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus impedit, tempora placeat mollitia quidem voluptate, id veritatis accusamus nihil a officia quasi totam hic corporis, consequuntur voluptatum dolorum fugiat repellat.
    </div>
    <div id="left" class="son">left</div>
    <div id="right" class="son">right</div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
.parent{
  height: 300px;
  padding-left: 150px;
  padding-right: 100px;
}
.son{
  float: left;
}
#middle{
  width: 100%;
  padding: 0 10px;
  background-color: green;
  color: #fff;
}
#left{
  width: 150px;
  height: 300px;
  background-color: #ccc;
  margin-left: -100%;
  position: relative;
  left: -150px;
}
#right{
  width: 100px;
  height: 300px;
  background-color: yellow;
  margin-right: -100px;
}
</style>


