<template>
  <div>
    <Header />
    <div class="page-index-wrapper">
        <!-- <div @click="on_logout">退出</div> -->
        <!-- <router-link to="/page">page</router-link> -->
        <!-- <router-link to="/info">info</router-link> -->
        <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from 'components/common/header'
import Footer from 'components/common/footer'

export default {
  name: 'index',
  components: {
    Header,
    Footer
  },
  data() {},
  created() {
    const token = this.$cookie.get('token')
    this.$store.commit('updateUser', token)
    this.$store.dispatch('getUser')
  },
  methods: {
    on_logout() {
      this.$cookie.remove('token')
      this.$store.dispatch('userLogout')
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style lang="scss" scoped>
.page-index-wrapper{
  height: 100%;
}
</style>

