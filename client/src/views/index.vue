<template>
  <div class="page-index-wrapper">
      <!-- <router-link to="/login">login</router-link> -->
      <!-- <router-link to="/info">info</router-link> -->
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style lang="scss" scoped>
.page-index-wrapper{
  height: 100%;
}
</style>

