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
        <button class="btn" @click="goMain">再跳转到主页面</button>
        <button class="btn" @click="goPage">再跳转到flex布局</button>
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
  name: 'login',
  data () {
    return {
      
    }
  },
  methods: {
    goMain () {
      this.$router.push({name: 'bfc'})
    },
    goPage () {
      this.$router.push({name: 'flexScreen'})
    }
  }
}
</script>
<style lang="less" scoped>
#container{
  position: relative;
  height:100%;
}
#header{
  border:1px solid green;
  height: 60px;
}
#main{
  position: absolute;
  top: 60px;
  left: 0;
  bottom: 60px;
  right: 0;
}
#aside{
  position: fixed;
  left: 0;
  top: 60px;
  bottom: 60px;
  right: 0;
  width: 200px;
  border:1px solid yellow;
  overflow-y: scroll;
}
#content{
  position: fixed;
  left: 200px;
  top: 60px;
  bottom: 60px;
  right: 0;
  border:1px solid blue;
  overflow-y: scroll;
}
#footer{
  position: fixed;
  border:1px solid red;
  height: 60px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
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


