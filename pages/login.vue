<template>
  <div class="login-main">
    <div class="login-inputs">
      <h3 style="font-size: 90px;letter-spacing: 25px;width: 100%;text-align: center;margin-bottom: 10px;margin-top: 20px;">SOHI</h3>
      <span >城乡规划智能决策支持系统</span>
      <div class="account-input">
        <input v-model="account"/>
      </div>
      <div class="password-input">
        <input type="password" v-model="password"/>
      </div>
      <div class="login-btn" @click="login">
      </div>
    </div>
  </div>
</template>

<script>
  // import axios from '~/plugins/axios'

  export default {
    head () {
      return {
        title: 'Users'
      }
    },
    data () {
      return {
        account: '',
        password: ''
      }
    },
    methods: {
      login () {
        this.$router.push({
          path: 'front'
        })
      }
    }
  }
</script>

<style scoped>
  .login-main {
    background-image: url("../assets/img/login-back.png");
    background-size:contain;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .login-inputs {
    color: white;
    /*background-image: url("../assets/img/login-inputs.png");*/
    background-repeat:no-repeat;
    position: absolute;
    width: 1024px;
    height: 768px;
    top: calc(50% - 384px);
    left: calc(50% - 512px);
    text-align: center;
  }
  .account-input {
    background-image: url("../assets/img/input-back-act.png");
    background-repeat:no-repeat;
    background-size:contain;
    height: 120px;
    width: 400px;
    position: relative;
    left: calc(50% - 230px);
    top: 50px;
  }
  .account-input input{
    display:block;
    position: relative;
    left: 175px;
    top: 57px;
    border:0px;
    background:rgba(0, 0, 0, 0);
    color:white;
    height: 28px;
    width: 160px;
  }
  .password-input {
    background-image: url("../assets/img/input-back-pwd.png");
    background-repeat:no-repeat;
    background-size:contain;
    height: 120px;
    width: 400px;
    position: relative;
    left: calc(50% - 230px);
    top: 50px;
  }
  .password-input input{
    display:block;
    position: relative;
    left: 175px;
    top: 57px;
    border:0px;
    background:rgba(0, 0, 0, 0);
    color:white;
    height: 28px;
    width: 160px;
  }
  .login-btn {
    background-image: url("../assets/img/login-btn.png");
    background-repeat:no-repeat;
    background-size:contain;
    height: 120px;
    width: 400px;
    position: relative;
    left: calc(50% - 230px);
    top: 50px;
  }
  .login-btn:hover {
    cursor: pointer;
  }
</style>
