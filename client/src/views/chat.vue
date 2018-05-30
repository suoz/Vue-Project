<template>
  <div class="page-chat-wrapper">
    <ul>
      <li v-for="(item, index) in msgList" :key="index" :class="{'active': fromUserInfo.userId === item.fromUser}">
        {{item.username}} -- {{item.message}}
      </li>
    </ul>
    <div>
      <div><input type="text" v-model="message" placeholder="请输入你要发送的信息"/></div>
      <button @click="sendMessage">发送</button>
    </div>
  </div>
</template>

<script>
import { getChat, saveMessage } from 'services/message'

export default {
  name: 'chat',
  data() {
    return {
      msgList: [{
        fromUser: '',
        toUser: '',
        message: '',
        time: '',
        // avator: '',
        username: '',
      }],
      message: '', // 发送的消息
      fromUserInfo: {  // 用户自己
        userId: '', // id
        username: '',
      },
      toUser: '', // 对方的id
    }
  },
  created() {
    const { userId: otherUserId } = this.$route.query
    this.toUser = otherUserId
    this.fromUserInfo = this.$store.state.user
    // this.resetUnred()
    this.getMessage()
    this.getMessageBySocket()
  },
  methods: {
    getMessage() {
      getChat(this.$cookie.get('userId'), this.toUser).then(res => {
        const { data } = res.data
        this.msgList = data
      })
    },
    getMessageBySocket() {
      socket.removeAllListeners('getMessage')
      socket.on('getMessage', data => {
        // 判断数据的toUser是不是给本人userId的
        if (data.toUser !== this.fromUserInfo.userId) return

        // 再判断数据的fromUser是不是当前对方fromUser的
        if (data.fromUser !== this.toUser) {
          // 不是就增加未读提示
          data.isNow = false
          this.$store.commit('updateListMutation', data)
          return
        } else {
          // 是就存入data
          data.isNow = true
          this.$store.commit('updateListMutation', data)
        }
        this.msgList.push(data)
      })
    },
    saveMessageByDb(data) {
      saveMessage(data).then(res => {
        this.message = ''
        this.msgList.push(data)
      })
    },
    sendMessage() {
      const data = {
        fromUser: this.fromUserInfo.userId,
        username: this.fromUserInfo.username,
        toUser: this.toUser,
        message: this.message,
        time: Date.parse(new Date()) / 1000,
      }
      socket.emit('sendMessage', data)
      this.saveMessageByDb(data)
    }
  },
}
</script>

<style lang="scss" scoped>
.page-chat-wrapper {
  ul {
    list-style: none;
    padding: 0;
    >li {
      padding: 10px;
      font-size: 18px;
      background: #ececec;
      margin-top: 20px;
      text-align: left;
      &.active {
        text-align: right;
      }
    }
  }
}
</style>

