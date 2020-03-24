<template>
  <div>
    <header>
      <HeaderPage></HeaderPage>
    </header>
    <aside class="aside-container" :style="{height:asideHeight}">
      <SidebarPage></SidebarPage>
    </aside>
    <main class="main-aontainer" :style="{height:asideHeight}">
      <router-view></router-view>
    </main>
    <footer>
      <FooterPage></FooterPage>
    </footer>
  </div>
</template>
<script>
import HeaderPage from '@/components/header'
import FooterPage from '@/components/footer'
import SidebarPage from '@/components/sidebar'
export default {
  name: 'mainPage',
  components: {
    HeaderPage,
    FooterPage,
    SidebarPage
  },
  data () {
    return {
      asideHeight: 0
    }
  },
  created () {
    this.setOptions()
  },
  methods: {
    setOptions () {
      // 判断是否mac,不是减去滚动条宽度
      // let scrollWidth = isMac(window.navigator.platform) ? 0 : 17
      // let clientWidth = document.documentElement.clientWidth
      let clientHeight = document.documentElement.clientHeight
      this.asideHeight = (clientHeight - 120) + 'px'
      // this.articleWidth = (clientWidth - 200) + 'px'
    },
  }
}
</script>
<style lang="less" scoped>
.aside-container{
  float: left;
  width: 240px;
  overflow: hidden;
  background-color: #d7dde4;
}
.main-aontainer {
  margin-left: 240px; 
  background: #fff;
  position: relative;
  padding: 20px;
  overflow-y: auto;
  // .layout-main-view {
  //   overflow-y: auto;
  //   padding: 20px 50px;
  // }
}
</style>


