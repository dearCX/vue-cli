<template>
<div>
  <div id="box">
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate provident porro cumque. Commodi adipisci facilis vitae magnam aliquam vel nulla sed ducimus accusamus dicta esse numquam nostrum non, debitis harum.</p>
  </div>
  <ul id="title">
    <li>标题1</li>
    <li>标题2</li>
    <li>标题3</li>
    <li>标题4</li>
    <li>标题5</li>
    <li>标题6</li>
    <li>标题7</li>
  </ul>
  <div id="box2">
    <div class="left"></div>
    <div class="right">
      <p>Iphone7 PLUS XXXXXXXXXX</p>
      <span>总人数99</span>
      <span>剩余人数33</span>
    </div>
    <div class="btn">立即参与</div>
  </div>
  <div id="container">
    <div id="header">header</div>
    <div id="content">
      <div id="left">left</div>
      <div id="main">main</div>
      <div id="right">right</div>
    </div>
    <div id="footer">footer</div>
  </div>
  <div class="demo">
    <div class="content">这是主要内容</div>
    <div class="bar">这是底部</div>
  </div>
  <div class="demo1">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
  </div>
</div>
</template>
<script>
export default {
  name: 'flex',
  data () {
    return {

    }
  },
  created () {
    this.testPromise(1)
  },
  methods: {
    testPromise (val) {
      return new Promise((resolve,reject) => {
        val === 1 ? resolve(val) : reject()
      }).then((value) => {
        window.console.log(value)
      }).catch((error => {
        window.console.log('error :' + error)
      }))
    }
  }
}
</script>
<style lang="less" scoped>
#box{
  width: 100%;
  height: 100px;
  border:2px solid green;
  display: flex;
  justify-content: center;
  align-items: center;
}
#box p{
  width: 500px;
  height: 60px;
  color: #fff;
  background-color: orange;
}
#title{
  display: flex;
  margin-top: 20px;
}
#title li{
  border-right:1px solid #ccc;
  background-color: rgb(37, 165, 224);
  text-align: center;
  padding: 10px 0;
  color: #fff;
  flex: 1;
}
#box2{
  display: flex;
  margin-top: 20px;
  border:1px solid #ccc;
}
#box2>div{
  // flex: none;
}
.left{
  width: 200px;
  height: 100px;
  background-color: #eee;
}
.right{
  flex: 0 0 70%;
  margin: 10px 0 0 10px;
}
.btn{
  width: 80px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  margin: 30px 0 0 30px;
  background-color: rgb(37, 165, 224);
  color: #fff;
}
#container{
  margin-top: 20px;
  display: flex;
  width: 100%;
  height: 200px;
  flex-direction: column;
  text-align: center;
}
// #container div{
//   flex: 1;
// }
// #header{
//   flex: 0 0 30px!important;
//   background-color: #eee;
// }
// #content{
//   display: flex;
// }
// #left{
//   background-color: red;
//   flex:0 0 20%!important;;
// }
// #main{
//   background-color: green;
// }
// #right{
//   background-color: yellow;
//   flex:0 0 20%!important;;
// }
// #footer{
//   flex: 0 0 30px!important;
//   background-color: #eee;
// }
#container>div{
  // flex: 1
}
#header{
  height: 30px;
  background-color: #eee;
}
#content{
  display: flex;
  flex: 1
}
#content>div{
  flex: 1
}
#left{
  width: 100px;
  background-color: red;
}
#main{
  background-color: green;
}
#right{
  background-color: yellow;
  width: 50px;
}
#footer{
  height: 30px;
  background-color: #eee;
}
.demo{
  margin-top: 20px;
  width: 100%;
  height: 80px;
  border:1px solid #333;
  display: flex;
  flex-direction: column;
}
.content{
  flex: 1;
}
.bar{
  width: 100%;
  background-color: #999;
  height: 30px;
}
.demo1{
  width: 300px;
  height: 300px; 
  border:1px solid #ddd;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start; 
}
.item{
  // box-sizing: border-box;
  flex: 0 0 33.33333333%;
  height: 80px;
  border:1px solid orange;
}
</style>


