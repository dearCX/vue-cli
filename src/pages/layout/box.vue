<template>
  <div>
    <section id="sec">
      <article class="child">
        边距重叠
      </article>
    </section>
    <section id="margin">
      <p>bfc垂直方向边距重叠</p>
      <div class="bfc">
        <p>2</p>
      </div>
      <p>3</p>
    </section>
    <section id="layout">
      <div class="left"></div>
      <div class="right"></div>
    </section>
    <section id="float">
      <div class="float-elem">浮动元素</div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'box'
}
</script>
<style lang="less" scoped>
#sec{
  background-color: purple;
  overflow: hidden;
  .child{
    height: 100px;
    margin-top: 10px;
    background-color: pink;
  }
}
#margin{
  margin-top: 20px;
  background-color: purple;
  overflow: hidden;
  .bfc{
    overflow: hidden;
  }
  p{
    margin: 5px 0 20px;
    background-color: pink;
  }
}
#layout{
  margin-top: 20px;
  background-color: purple;
  .left{
    float: left;
    width: 100px;
    height: 100px;
    background-color: pink;
  }
  .right{
    height: 110px;
    background-color: yellowgreen;
    overflow: auto;
  }
}
#float{
  margin-top: 20px;
  background-color: purple;
  overflow: hidden;
  .float-elem{
    float: left;
    background-color: pink;
  }
}
</style>
