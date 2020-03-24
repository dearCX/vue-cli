<template>
  <div id="container">
    <div id="header">login</div>
    <div id="main">
      <div id="aside">
        <div class="box1"></div>
        <div class="box1"></div>
        <div class="box1"></div>
        <div class="box1"></div>
        <div class="box1"></div>
        <div class="box1"></div>
        <div class="box1"></div>
        <div class="box1"></div>
        <div class="box1"></div>
      </div>
      <div id="content">
        <button class="btn">再跳转到login页面</button>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
    </div>
    <div id="footer"></div>
  </div>
</template>
<script>
export default {
  name:'flexScreen'
}
</script>
<style lang="less" scoped>
#container{
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
}
#header{
  border:1px solid green;
  height: 60px;
}
#main{
  display: flex;
  height: 100vh;
}
#aside{
  width: 200px;
  border:1px solid yellow;
  overflow-y: scroll;
}
#content{
  flex: 1;
  border:1px solid blue;
  overflow-y: scroll;
}
#footer{
  border:1px solid red;
  height: 60px;
}
.box1{
  height: 300px;
  border:1px solid purple;
  margin: 20px 0;
}
.box{
  height: 300px;
  border:1px solid #ddd;
  margin: 20px 0;
}
.btn{
  margin-top: 20px;
  margin-left: 20px;
}
</style>


