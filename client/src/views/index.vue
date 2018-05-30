<template>
  <div>
    <Header />
    <div class="page-index-wrapper">
        <div class="banner">
          <div class="container">
            <div class="title-wrapper">
              <span class="title">CPP 集团</span>
              <div class="additional">构建卓越伙伴关系</div>
            </div>
          </div>
        </div>
        <div class="center">
          <div class="container">
            <div class="top-swiper">
              <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
                <!-- slides -->
                <swiper-slide>
                  <div class="item">
                    <div class="item-left"></div>
                    <div class="item-right">
                      <p class="title">人在哪里？</p>
                      <p class="content">人们是CPP的心跳。我们的成功取决于他们的能量和驱动力。这就是为什么我们不懈地专注于帮助他们尽可能做到最好。我们创造了一种文化，我们的人民想成为一个包含授权和权限的文化的一部分。</p>
                      <button class="button more">了解更多</button>
                    </div>
                  </div>
                </swiper-slide>
                <!-- <swiper-slide>I'm Slide 2</swiper-slide> -->
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
                <div class="swipper-btn swiper-button-prev" slot="button-prev"></div>
                <div class="swipper-btn swiper-button-next" slot="button-next"></div>
              </swiper>
            </div>
            <div class="bottom-swiper">
              <div class="left">
                <div class="des">
                  CPP集团为全球客户提供优质定制产品和解决方案；<br/>帮助合作伙伴提高附加值，提供卓越客户体验。
                </div>
                <button class="button">了解更多</button>
              </div>
              <div class="right">
                swiper
              </div>
            </div>
          </div>
        </div>
        <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from 'components/common/header'
import Footer from 'components/common/footer'
import { swiper, swiperSlide } from "vue-awesome-swiper"
import 'swiper/dist/css/swiper.css'

export default {
  name: 'index',
  components: {
    Header,
    Footer,
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      }
    }
  },
  created() {
    const token = this.$cookie.get('token')
    this.$store.commit('updateUser', token)
    this.$store.dispatch('getUser')
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log('this is current swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    on_logout() {
      this.$cookie.remove('token')
      this.$store.dispatch('userLogout')
      this.$router.push({ path: '/login' })
    },
    callback() {

    }
  }
}
</script>

<style lang="scss" scoped>
.page-index-wrapper{
  .banner {
    background-image: url('/static/img/banner/homepage-banner.jpg');
    height: 544px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    .container {
      position: relative;
      height: 100%;
      .title-wrapper {
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(0, -50%);
        margin: 0 0 40px 45px;
        .title {
          min-width: 156px;
          display: inline-block;
          font-size: 34px;
          font-weight: 600;
          color: #6e006e;
          text-align: left;

        }
        .additional {
          font-weight: 400;
          color: #e5007d;
          font-size: 20px;
        }
      }
    }
  }
  .center {
    min-height: 640px;
    background: #6e006e;
    .container {
      position: relative;
      .top-swiper {
        position: absolute;
        top: -200px;
        .swipper-btn {
          width: 44px;
          height: 44px;
          background-size: 100%;
          border-radius: 50%;
          background-repeat: no-repeat;
          background-image: url(/static/img/serverIndex/icon-right@3x.png);
        }
        .swiper-button-prev {
          transform: rotate(180deg);
        }
        .swiper-slide {
          width: 100%;
          padding: 0 60px;
        }
        .item {
          height: 400px;
          .item-left {
            float: left;
            width: 50%;
            height: 100%;
            overflow: hidden;
            background: url(/static/img/serverIndex/group-2@2x.jpg);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 50%;
          }
          .item-right {
            float: right;
            position: relative;
            width: 50%;
            height: 100%;
            background: #fff;
            padding: 40px;
            text-align: left;
            .title {
              color: #c30078;
              padding-bottom: 30px;
              display: block;
              font-weight: 500;
              font-size: 24px;
              margin: 0;
            }
            .content {
              color: #505255;
              font-size: 14px;
            }
            .more {
              position: absolute;
              bottom: 40px;
              left: 40px;
            }
          }
        }
      }
      .bottom-swiper {
        background: url(/static/img/common/map.png);
        overflow: hidden;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 100%;
        position: absolute;
        top: 260px;
        left: 0;
        width: 100%;
        height: 277px;
        padding: 0 45px;
      }
    }
  }
}
@media (max-width: 768px) {
  .page-index-wrapper{
    width: 100%;
  }
}
</style>

