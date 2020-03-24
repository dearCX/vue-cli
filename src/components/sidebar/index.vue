<template>
  <div>
    <Menu theme="dark" accordion :active-name="currentPageName" :open-names="openName" @on-select="changeMenu">
      <Submenu v-for="menu in menusList" :name="menu.index" :key="menu.index">
        <template slot="title">
            <Icon type="ios-cog"/>
            {{menu.title}}
        </template>
        <MenuItem v-for="child in menu.children" :name="child.name" :key="child.name">{{child.title}}</MenuItem>
      </Submenu>
    </Menu>
  </div>
</template>
<script>
import data from '../menu.json'
export default {
  name: 'sidebarPage',
  data () {
    return {
      title: '侧边栏',
      menusList: data.menus,
      currentPageName: this.$route.name
    }
  },
  created () {
    let a = 1
    window.console.log(a)
  },
  computed: {
    openName () {
      let arr = []
      arr.push(this.$route.path.split('/')[2])
      let a = arr
      window.console.log(a)
      return arr
    }
  },
  methods: {
    changeMenu(active) {
      this.$router.push({
        name: active
      })
    }
  }
}
</script>


