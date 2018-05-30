<template>
  <div class="com-footer-wrapper">
    <div class="container">
      <div class="contents-wrapper">
        <div class="left-wrapper">
          <ul class="list-unstyled left-ui">
            <li>
              <router-link to="/information">
                <span>联系我们</span>
              </router-link>
            </li>
            <li>
              <router-link to="/information">
                <span>最新动态</span>
              </router-link>
            </li>
            <li>
              <router-link to="/information">
                <span>联系我们</span>
              </router-link>
            </li>
          </ul>
          <ul class="list-unstyled right-ul">
            <li>
              <router-link to="/information">
                <span>最新动态</span>
              </router-link>
            </li>
            <li>
              <router-link to="/information">
                <span>联系我们</span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="right-wrapper">
          <div class="icon-wrapper"></div>
          <div class="right-content">
            <div class="select-container">
              <p class="select-name">选择一个网站</p>
              <select name id="selectId">
                <option value="0">CPP集团 中国</option>
                <option value="1">CPP集团 香港</option>
                <option value="2">CPP集团 美国</option>
              </select>
            </div>
            <div class="language-box">
              <span>svg</span>
              <span class="language-word">English</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container"></div>
  </div>
</template>

<script>
export default {
  name: 'footer',
    data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.com-footer-wrapper {
  padding-top: 50px;
  border-top: 1px solid #ececec;
  background: #fff;
  .contents-wrapper {
    display: flex;
    .left-wrapper {
      width: 40%;
      display: flex;
      >ul {
        width: 50%;
        min-width: 205px;
        flex: 1 1 0%;
        >li {
          padding: 10px 0;
          text-align: left;
          >a {
            margin: 10px 0;
            color: #004196;
            font-size: 14px;
            text-decoration: none;
          }
        }
      }
    }
    .right-wrapper {
      width: 60%;
      .icon-wrapper {
        margin-left: 120px;
      }
      .right-content {
        text-align: right;
        float: left;
        .select-container {
          position: relative;
          .select-name {
            margin-top: 4px;
            color: rgba(110,0,110,.5);
            font-size: 12px;
            text-align: left;
          }
        }
        select {
          width: 200px;
          height: 40px;
          padding-left: 12px;
          font-size: 16px;
          color: #6e006e;
          border: 1px solid #6e006e;
          background-color: #fff;
          cursor: pointer;
          border-radius: 0;
        }
        .language-box {
          cursor: pointer;
          margin-top: 14px;
          color: #6e006e;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          align-items: center;
          .language-icon {}
          .language-word {
            
          }
        }
      }
    }
  }
}
</style>


