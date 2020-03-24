<template>
  <div>
    <div id="header">
      header
    </div>
    <div id="main">
      <div id="aside">
        left
      </div>
      <div id="main-content">
        ddd
      </div>
    </div>
    <div id="footer">
      footer
    </div>
  </div>
</template>
<style lang="less" scoped>
#header{
  position:relative; 
  height:80px;
  margin-top:-80px;  
  background:#f1f1f1; 
  border:1px solid #ddd;
  border-width:1px 0 1px 0;
}
#main {
  position:relative;
}
#aside{
  width:100px;
  background:#fff;
  }
#main-content{
  position: absolute;
  top: 0;
  left: 100px;
  right: 0;
  bottom: 0;
  margin-left: 100px;
  background-color: green;
}
#footer{
  position:relative; 
  height:30px; 
  clear:both; 
  background:#f1f1f1;
  border:1px solid #ddd;
  }
</style>
