<template>
  <div class="page-information-wrapper">
    <el-container>
      <el-main>
        <div class="information-swipper">swipper</div>
        <div class="information-selete">selete</div>
      </el-main>
      <el-aside>
        <div class="information-video">video</div>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'information',
  data() {
    return {}
  },
  created() {
    console.log('information')
  }
}
</script>

<style lang="scss" scoped>
.page-information-wrapper {

}

@media (max-width: 768px) {
  .page-information-wrapper {

  }
}
</style>
