<template>
  <div class="com-login-wrapper">
    <form>
      <div>
        <label for="email">邮箱</label>
        <input
          type="text"
          name="email"
          id="email"
          v-model="email"
          :class="{active: errors.has('email')}"
          v-validate.initial="'required|email'" />
      </div>
      <p v-show="errors.has('email')">{{errors.first('email')}}</p>
      <div>
        <label for="password">密码</label>
        <input
          type="password"
          name="password"
          id="password"
          :class="{active: errors.has('password')}"
          v-model="password"
        />
      </div>
      <p v-show="errors.has('password')">{{errors.first('password')}}</p>
      <button @click.prevent="on_submit">登录</button>
    </form>
  </div>
</template>

<script>
import { Validator } from 'vee-validate'

export default {
  name: 'Login',
  data() {
    return {
      password: '',
      email: ''
    }
  },
  created() {
    // 内置规则-verify_password
    Validator.extend('verify_password', {
      getMessage: field => `The ${field} is not a valid password.`,
      validate: value => new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            valid: value && value === '123123'
          });
        }, 500);
      })
    });
    this.$validator.attach({
      name: 'password',
      rules: 'required|verify_password'
    });
  },
  methods: {
    on_submit() {
      this.$validator.validateAll({ email: this.email, password: this.password }).then((result) => {
        console.log('res', result)
      })
      // console.log('this', this.errors)
      // this.$validator.validateAll({}).then((result) => {
      //   console.log('all result', result)
      // })
      // this.$validator.validate('password', this.password).then((result) => {
      //   console.log('password result', result)
      // })
    }
  }
}
</script>

<style scoped lang="scss">
.com-login-wrapper {
  .active{
    border: 1px solid red;
  }
}
</style>

