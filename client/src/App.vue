<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
html, body{
  width: 100%;
  height: 100%;
  margin: 0;
}
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
ul { 
  list-style: none;
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}

/* 按钮 */
.button {
  text-align: center;
  cursor: pointer;
  height: 40px;
  line-height: 38px;
  border-radius: 40px;
  min-width: 140px;
  font-size: 14px;
  color: #fff;
  background: #c30078;
  border: 1px solid transparent;
}

/* 模拟bootstrap container */
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1200px;
    padding-left: 0;
    padding-right: 0;
  }
}


// nav下拉菜单
.el-dropdown {
  >a {
    color: #004196;
  }
}
.el-dropdown-menu {
  width: 118px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top: 4px solid #6e006e;
  padding: 10px 0;
  .popper__arrow {
    display: none;
  }
  .el-dropdown-menu__item {
    padding: 0 30px;
    color: #004196;
    &:hover {
      background: #fff;
      opacity: .6;
      color: #004196;
    }
  }
}
.el-dropdown-user {
  width: auto;
  .el-dropdown-menu__item {
    padding: 0 25px;
    .dropdown-user {
      .hello {
        color: #004196;
        font-size: 16px;
      }
      .logout {
        cursor: pointer;
        font-size: 12px;
      }
      .button {
        background: #c30078;
        padding: 0 40px;
        text-align: center;
        border-radius: 30px;
        margin: 8px 0;
        cursor: pointer;
        >a {
          color: #fff;
        }
        &:hover {
          background: rgba(195,0,120,.8);
        }
      }
    }
    &:hover {
      cursor: auto;
      opacity: 1;
      color: #606266;
    }
  }
}
.el-dropdown-none {
  padding: 0px;
  margin: -5px 0px 0px;
  border: 2px solid #6e006e;
  border-radius: 6px;

}
.el-popper[x-placement^=bottom] {
  margin-top: -5px;
}


</style>
