<template>
  <div>
    <component :is="mainView"></component>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Login from './login.vue'
import MainPage from './mainPage.vue'

export default {
  name: 'home',
  components: {
    Login,
    MainPage
  },
  data () {
    return {

    }
  },
  methods: {

  },
  computed: {
    ...mapGetters([
      'isLogin'
    ]),
    mainView () {
      return this.isLogin ? 'MainPage' : 'Login'
    }
  }
}
</script>
