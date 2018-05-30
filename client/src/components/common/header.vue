<template>
  <div class="com-header-wrapper">
    <div class="container">
      <div class="logo">
        <router-link to="/" tag="img" src="static/svg/logo.svg"/>
      </div>
      <div class="nav">
        <ul>
          <li>
            <el-dropdown placement="bottom">
              <router-link to="/information" class="el-dropdown-link">
                <span>健康资讯</span>
              </router-link>
              <el-dropdown-menu slot="dropdown" class="el-dropdown-none"></el-dropdown-menu>
            </el-dropdown>
          </li>
          <li>
            <el-dropdown placement="bottom">
              <router-link to="/message" class="el-dropdown-link">
                <span>交流平台</span>
              </router-link>
              <el-dropdown-menu slot="dropdown" class="el-dropdown-none"></el-dropdown-menu>
            </el-dropdown>
          </li>
          <li>
            <el-dropdown placement="bottom">
              <router-link to="/product" class="el-dropdown-link">
                <span>产品中心</span>
              </router-link>
              <el-dropdown-menu slot="dropdown" class="el-dropdown-none"></el-dropdown-menu>
            </el-dropdown>
          </li>
          <li>
            <el-dropdown placement="bottom">
              <router-link to="/aboutUs" class="el-dropdown-link">
                <span>联系我们</span>
              </router-link>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <div class="select-item">蚵仔煎阿</div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <li>
            <el-dropdown placement="bottom">
              <router-link to="/personal" class="el-dropdown-link">
                <img src="static/img/common/icon-my.png"/>
              </router-link>
              <el-dropdown-menu slot="dropdown" class="el-dropdown-user">
                <el-dropdown-item v-if="!token">登录</el-dropdown-item>
                <el-dropdown-item v-if="token">
                  <div class="dropdown-user">
                    <span class="hello">你好，{{username}} </span>|   <span class="logout" @click.stop.prevent="on_logout">退出</span>
                    <div class="button">
                      <router-link to="/personal" class="el-dropdown-link">
                        会员中心
                      </router-link>
                    </div>
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'header',
  data() {
    return {}
  },
  computed: {
    ...mapState({
      token: state => state.user.token,
      username: state => state.user.username
    })
  },
  methods: {
    on_logout() {
      alert('on_logout')
    },
  }
}
</script>

<style lang="scss" scoped>
.com-header-wrapper {
  border-bottom: 1px solid #6e006e;
  height: 60px;
  line-height: 60px;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      display: flex;
      cursor: pointer;
      >img {
        display: inline-block;
        width: 190px;
      }
    }
    .nav ul {
      display: flex;
      margin: 0;
      padding: 0;
      >li{
        width: 80px;
        margin: 0 15px;
        cursor: pointer;
        >a {
          color: #004196;
          display: inline-block;
          text-decoration: none;
          height: 100%;
        }
        img {
          width: 20px;
          height: 18px;
          cursor: pointer;
          vertical-align: sub;
        }
        &:hover {
          // border-bottom: 2px solid #6e006e;
        }
      }
    }
  }
}

@media (max-width:768px) {
  .com-header-wrapper {

  }
}
</style>


