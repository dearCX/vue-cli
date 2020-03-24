<template>
<div>
  <section class="layout float">
    <article class="left-center-right">
      <div class="left"></div>
      <div class="right"></div>
      <div class="center">
        <h1>float解决已知高度的三栏布局</h1>
        <p>三栏中间部分，宽度自适应</p>
      </div>
    </article>
  </section>
  <section class="layout absolute">
    <article class="left-center-right">
      <div class="left"></div>
      <div class="center">
        <h1>absolute解决已知高度的三栏布局</h1>
        <p>三栏中间部分，宽度自适应</p>
      </div>
      <div class="right"></div>
    </article>
  </section>
  <section class="layout flex">
    <article class="left-center-right">
      <div class="left"></div>
      <div class="center">
        <h1>flex布局解决已知高度的三栏布局</h1>
        <p>三栏中间部分，宽度自适应</p>
      </div>
      <div class="right"></div>
    </article>
  </section>
  <section class="layout table">
    <article class="left-center-right">
      <div class="left"></div>
      <div class="center">
        <h1>table布局解决已知高度的三栏布局</h1>
        <p>三栏中间部分，宽度自适应</p>
      </div>
      <div class="right"></div>
    </article>
  </section>
  <section class="layout grid">
    <article class="left-center-right">
      <div class="left"></div>
      <div class="center">
        <h1>grid布局解决已知高度的三栏布局</h1>
        <p>三栏中间部分，宽度自适应</p>
      </div>
      <div class="right"></div>
    </article>
  </section>
</div>
</template>
<script>
export default {
  name: 'threeGrid'
}
</script>
<style lang="less" scoped>
// float布局
.layout.float{
  div{
    min-height: 100px;
  }
  .left{
    float: left;
    width: 300px;
    background-color: pink;
  }
  .right{
    float: right;
    width: 300px;
    background-color: yellowgreen;
  }
  .center{
    background-color: purple;
    color: white;
  }
}
// 绝对定位布局
.layout.absolute{
  margin-top: 20px;
  min-height: 100px;
  .left-center-right{
    position: relative;
  }
  div{
    min-height: 100px;
    position: absolute;
  }
  .left{
    position: absolute;
    width: 300px;
    left: 0;
    background-color: pink;
  }
  .right{
    position: absolute;
    width: 300px;
    right: 0;
    background-color: yellowgreen;
  }
  .center{
    left: 300px;
    right: 300px;
    background-color: purple;
    color: white;
  }
}
// flex布局
.layout.flex{
  margin-top: 20px;
  div{
    min-height: 100px;
  }
  .left-center-right{
    display: flex;
  }
  .left{
    width: 300px;
    background-color: pink;
  }
  .center{
    flex: 1;
    background-color: purple;
    color: white;
  }
  .right{
    width: 300px;
    background-color: yellowgreen;
  }
}
// 表格布局
.layout.table{
  margin-top: 20px;
  .left-center-right{
    display: table;
    width: 100%;
    height: 100px;
  }
  div{
    display: table-cell;
  }
  .left{
    width: 300px;
    background-color: pink;
  }
  .center{
    background-color: purple;
    color: white;
  }
  .right{
    width: 300px;
    background-color: yellowgreen;
  }
}
// grid布局
.layout.grid{
  margin-top: 20px;
  .left-center-right{
    display: grid;
    width: 100%;
    grid-template-rows: 100px;
    grid-template-columns: 300px auto 300px;
  }
  .left{
    background-color: pink;
  }
  .center{
    background-color: purple;
    color: white;
  }
  .right{
    background-color: yellowgreen;
  }
}
</style>
