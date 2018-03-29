<template>
  <div class="page-login-wrapper">
    <el-form label-position="top" label-width="80px" ref="loginForm" :rules="rules" :model="loginForm" class="login-form">
      <div class="avater">
        <img src="static/img/login/avater.png">
      </div>
      <div class="logo">
        <img src="static/svg/logo.svg">
      </div>
      <div class="info">
        <el-form-item label="账号" prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
      </div>
      <el-form-item>
        <!-- <el-button type="primary" @click="on_submit('loginForm')">登录</el-button> -->
        <img src="static/img/login/login_btn.png" @click="on_submit('loginForm')">
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { loginUser } from '../services/user'

export default {
  data(){
    return {
      loginForm: {        //表单v-model的值
        username: '',
        password: ''
      },
      rules: { //验证规则
        username: [
          { required: true, message: '请输入账号', trigger: 'blur'},
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          // { min: 6, max: 16, message: '密码在6到16位之间', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    // console.log('this', this)
  },
  methods: {
    on_submit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 发送一个请求给后端
          loginUser({
            username: this.loginForm.username,
            password: this.loginForm.password
          }).then(res => {
            const { data } = res.data
            const token = data.token
            this.$cookie.set('token', `Bearer ${token}`, { expires: '24h' })
            this.$store.dispatch('updateUser', token)
            // this.$router.push({ path: 'page' })
          }).catch(err => {
            console.warn(err)
          })
          // 前端拿到token cookie保存，下次访问其它接口浏览器自动发送cookie(axios拦截器)
        } else {
          console.log('error submit')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.page-login-wrapper {
  height: 100%;
  background: url('/static/img/login/bg.png') no-repeat;
  .login-form {
    width: 325px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .logo {
      margin-bottom: 15px;
    }
    .info {
      .el-form-item {
        text-align: left;
        .el-form--label-top .el-form-item__label {
          padding: 0;
          color: #9296a7;
        }
      }
    }
    .el-form-el-form-item__content {
      margin-top: 10px;
      cursor: pointer;
    }
  }
}
</style>


