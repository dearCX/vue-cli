<template>
  <div>
    <div class="header-container">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: 'headerPage',
  data () {
    return {
      title: '头部'
    }
  }
}
</script>
<style lang="less" scoped>
@font-color: white;
@font-size: 18px;
.header-container{
  width: 100%;
  height: 60px;
  line-height: 60px;
  overflow: hidden;
  background-color: #02142B;
  color: @font-color;
  font-size: @font-size;
  text-align: center;
}
</style>

  
  