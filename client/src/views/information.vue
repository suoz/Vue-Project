<template>
  <div class="page-information-wrapper">
    <el-container>
      <el-main>
        <div class="information-swipper">
          <swiper :options="swiperOption">
            <swiper-slide><div><img src="static/img/information/banner-1.jpg"/></div></swiper-slide>
            <swiper-slide><div><img src="static/img/information/banner-2.jpg"/></div></swiper-slide>
            <swiper-slide><div><img src="static/img/information/banner-3.jpg"/></div></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
        <div class="information-selete">
          <ul class="information-ul">
            <li v-for="(item, index) in theme">
              <span :class="{active: index === currentTheme}" @click="() => on_changeTheme(index)">{{item}}</span>
            </li>
          </ul>
          <div class="information-news">
            <ul>
              <li v-for="(item, index) in jsonData" v-if="index >= (currentStep-1) * 5 && index < currentStep * 5">
                <div class="info-pic-wrap">
                  <img :src="item.img" />
                </div>
                <div class="detail">
                  <router-link :to="{name: 'infoDetail', params: { slug: item.slug }}" class="title">{{item.title}}</router-link>
                  <p>{{item.abstract}}</p>
                  <span class="date">{{item.time}}</span>
                  <span class="channel">{{filterTheme(item.theme)}}</span>
              </div>
              </li>
            </ul>
          </div>
          <div class="information-pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :current-page="currentStep"
              :page-size="5"
              @current-change="on_changeStep"
              :total="total">
            </el-pagination>
          </div>
        </div>
      </el-main>
      <el-aside class="information-video">
        <div class="video-list news-info-list">
          <div class="header">
            <span class="title">视频直播</span>
            <a class="change-btn" href="javascript:void(0)">
              <i class="icon-change"></i>换一批
            </a>
          </div>
          <div class="video-list-wrap">
            <a class="news-info-item" href="/pc/video/359/374/" target="_blank">
              <div class="info-pic-wrap video-type">
                <img class="info-pic" src="https://media2.chunyuyisheng.com/@/media/images/2017/07/20/398a/37868458d150_w180_h150_.jpg">
                  <span class="duration"> 60:11 </span>
              </div>
              <div class="info-detail">
                <span class="title">【有请大医生】每天都在吹空调，如何预防空调病？</span>
                <div class="info-footer">
                  <span class="create-time">7月25日</span>
                </div>
              </div>
            </a>

            <a class="news-info-item " href="/pc/video/356/371/" target="_blank">
              <div class="info-pic-wrap video-type">
                <img class="info-pic" src="https://media2.chunyuyisheng.com/@/media/images/2017/07/14/780b774cc998_w180_h150_.jpg">
                <span class="duration"> 58:57 </span>
              </div>
              <div class="info-detail">
                <h6 class="title">运动减肥，跳过这些坑能瘦得更快！</h6>
                <div class="info-footer">
                  <span class="create-time">7月18日</span>
                </div>
              </div>
            </a>
          </div>
          <button @click="on_click">{{button}}</button>
        </div>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import axios from 'utils/axios'
import { getInfo } from 'services/info'
export default {
  name: 'information',
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        // centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      currentStep: 1,
      total: 0,
      currentTheme: 0,
      jsonData: [],
      theme: ['生活', '营养', '母婴', '癌症'],
      button: '登录'
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      getInfo({ theme: this.currentTheme }).then((res) => {
        const { data } = res.data
        this.jsonData = data
        this.total = data.length
      })
    },
    on_click() {
      this.button = '注销'
    },
    filterTheme(theme) {
      switch(theme) {
        case "0": return '生活'
        case "1": return '营养'
        case "2": return '母婴'
        case "3": return '癌症'
      }
    },
    on_changeStep(currentStep) {
      this.currentStep = currentStep
    },
    on_changeTheme(index) {
      this.currentTheme = index
      this.getData()
    }
  }
}
</script>

<style lang="scss" scoped>
.page-information-wrapper {
  .information-swipper {
    margin-bottom: 10px;
    .swiper-container {
      height: 210px;
      .swiper-slide {
        overflow: hidden;
      }
      img {
        height: 210px;
      }
    }
  }
  .information-selete {
    .information-ul {
      margin: 0;
      padding: 15px 0 0 0;
      border-top: 2px solid #6e006e;
      border-bottom: 1px solid #e7e7e7;
      list-style: none;
      overflow: hidden;
      >li {
        width: 25%;
        float: left;
        margin-bottom: 10px;
        >span {
          cursor: pointer;
          &:hover {
            text-decoration: underline;
            color: #6e006e;
          }
        }
      }
      .active {
        color: #fff;
        background: #6e006e;
        &:hover {
          color: #fff;
        }
      }
    }
    .information-news {
      >ul {
        padding: 0;
        margin: 20px 0;
        >li {
          overflow: hidden;
          margin-bottom: 25px;
          .info-pic-wrap {
            display: inline-block;
            float: left;
            width: 132px;
            height: 110px;
            overflow: hidden;
            margin-right: 15px;
            >img {
              height: 100%;
              width: 100%;
              -webkit-transition: all .4s ease-in-out;
              -moz-transition: all .4s ease-in-out;
              transition: all .4s ease-in-out;
            }
          }
          .detail {
            border-bottom: 1px dashed #eee;
            height: 130px;
            overflow: hidden;
            .title {
              display: inline-block;
              text-decoration: none;
              font-size: 20px;
              color: #323232;
              margin-bottom: 15px;
              height: 22px;
              line-height: 22px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              width: 100%;
              text-align: left;
              &:hover {
                color: #6e006e;
                text-decoration: underline;
              }
            }
            >p {
              margin-top: 0;
              margin-bottom: 13px;
              font-size: 14px;
              color: #999;
              height: 44px;
              line-height: 22px;
              overflow: hidden;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
            .date {
              font-size: 14px;
              color: #999;
              height: 22px;
              line-height: 22px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              margin-right: 10px;
              float: left;
            }
            .channel {
              font-size: 14px;
              color: #999;
              float: left;
            }
          }
        }
      }
    }
  }
  .information-video {
    position: relative;
    width: 300px;
    overflow: hidden;
    float: right;
    margin-top: 10px;
    .video-list {
      border: 1px solid #e7e7e7;
      padding: 15px 10px 0;
      margin-bottom: 10px;
      .header {
        height: 20px;
        line-height: 20px;
        .title {
          font-size: 16px;
          color: #666;
          font-weight: 400;
          margin: 0;
          float: left;
        }
        >a {
          float: right;
          color: #6e006e;
        }
      }
      .video-list-wrap {
        .news-info-item {
          display: block;
          padding: 20px 0;
          overflow: hidden;
          height: 75px;
          border-top: 1px dashed #e7e7e7;
          font-size: 14px;
          text-decoration: none;
          &:first-child {
            border-top: none;
            padding-top: 10px;
          }
          .video-type {
            display: inline-block;
            position: relative;
            float: left;
            margin-right: 10px;
            overflow: hidden;
            height: 75px;
            width: 90px;
            >img {
              height: 100%;
              width: 100%;
            }
            >span {
              position: absolute;
              right: 2px;
              bottom: 2px;
              font-size: 12px;
              color: #fff;
            }
          }
          .info-detail {
            height: 75px;
            overflow: hidden;
            position: relative;
            .title {
              font-size: 14px;
              text-decoration: none;
              display: inline-block;
              text-align: left;
              font-weight: 400;
              color: #323232;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              max-height: 40px;
              line-height: 20px;
              overflow: hidden;
              margin: 0;
            }
            .info-footer {
              position: absolute;
              height: 18px;
              line-height: 18px;
              overflow: hidden;
              bottom: 0;
              font-size: 14px;
              color: #999;
            }
          }
        }
      }
    }
  }
  .swiper-pagination-bullet-active,
  .el-pagination.is-background .el-pager li:not(.disabled).active,
  .el-pagination.is-background .el-pager li:not(.disabled):hover {
    color: #6e006e;
  }
}

@media (max-width: 768px) {
  .page-information-wrapper {
    .el-container {
      flex-direction: column;
      .el-main {
        padding: 20px 0 0 0;
      }
    }
    .information-selete {
      .information-news {
        padding: 0 15px;
      }
    }
  }
}
</style>
