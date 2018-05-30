<template>
  <div class="page-information-detail-wrapper">
    <div class="title">{{this.obj.title}}</div>
    <div class="time">时间：{{this.obj.time}}</div>
    <div class="content" v-html="this.obj.abscract.content"></div>
  </div>
</template>

<script>
import { getInfoDetail } from '../services/info'
export default {
  name: 'infoDetail',
  data() {
    return {
      obj: {
        title: '',
        content: '',
        time: ''
      }
    }
  },
  created() {
    const { slug } = this.$route.params
    getInfoDetail({ slug: slug }).then((res) => {
      const { data } = res.data
      this.obj = data
    })
  }
}
</script>

<style lang="scss" scoped>
.page-information-detail-wrapper {
  text-align: left;
  .title {
    margin-top: 25px;
    font-size: 24px;
    line-height: 1.5;
    font-weight: 500;
    color: #323232;
  }
  .time {
    margin-top: 10px;
    font-size: 14px;
    color: #999;
  }
  img {
    width: 50%;
  }
}
</style>


