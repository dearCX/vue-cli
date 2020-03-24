<template>
  <div>
    <div class="footer-container">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: 'footerPage',
  data () {
    return {
      title: '底部'
    }
  }
}
</script>
<style lang="less" scoped>
.footer-container{
  height: 60px;
  line-height: 60px;
  text-align: center;
}
</style>

  
  