<template>
  <div class="parent">
    <div id="middle" class="son">
      <div class="middle">
        center
      </div>
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
}
.son{
  float: left;
}
#middle{
  width: 100%;
  height: 300px;
  background-color: green;
}
.middle{
  margin: 0 100px 0 150px;
}
#left{
  width: 150px;
  height: 300px;
  margin-left: -100%;
  background-color: #ccc;
}
#right{
  width: 100px;
  height: 300px;
  background-color: yellow;
  margin-left: -100px;
}
</style>


