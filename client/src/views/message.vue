<template>
  <div class="page-message-wrapper">
    <ul>
      <router-link :to="{ name: 'chat', query: {userId: item.userId} }" v-for="(item, index) in MsgList" tag="li" key={item.userId}>
        <div>username: {{item.username}}</div>
        <div>message: {{item.message}}</div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'message',
  data() {
    return {

    }
  },
  methods: {
    getMsgBySocket() {
      // socket.removeAllListeners()
    }
  },
  computed: {
    ...mapState({
      MsgList: state => state.message.msgList
    })
  },
  created() {
    if (this.$store.state.message.firstLoad) {
      const userId = this.$cookie.get('userId')
      this.$store.dispatch('msgListAction', userId)
      this.$store.dispatch('otherUserInfoAction', userId)
      this.$store.dispatch('firstLoadMutation', false)
    }
    this.getMsgBySocket()
  }
}
</script>

<style lang="scss" scoped>

</style>

