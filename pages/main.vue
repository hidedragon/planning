<!--控制台界面-->
<template>
  <div class="main">
    <div class="top">
      <div class="top-logo">
        <img src="../assets/img/logo_2_new.png" width="88%" style="margin-top: 8px;margin-left: 8px;"/>
      </div>
      <div class="top-user">
        <div style="display: inline-block;">
          <Icon type="md-person"  size="22" color="white" style="margin-top: -5px;"/>
        </div>
        <div style="height: 22px;line-height: 22px;display: inline-block;padding-top: 5px;">
          <span style="font-size: 15px;">欢迎您，</span>
          <span style="font-size: 15px;font-weight: bold;">系统管理员&emsp;</span>
          <a href="#" @click="logout" style="color: #2d8cf0;font-size: 15px;">注销</a>
        </div>
      </div>
    </div>

    <div class="left">
      <Menu theme="dark" :active-name="appRouter[0].children[0].name" :open-names="[appRouter[0].name]" @on-select="goto">
        <Submenu v-for="item in appRouter" :name="item.name" :key="item.name">
          <template slot="title">
            <Icon :type="item.icon" size="22"/>
            {{item.title}}
          </template>

          <MenuItem v-for="itemS in item.children" :name="itemS.name" :key="itemS.name" class="menu-item">
            <nuxt-link :to="itemS.path">
              <Icon :type="itemS.icon" size="22"/>
              {{itemS.title}}
            </nuxt-link>
          </MenuItem>
        </Submenu>
      </Menu>
    </div>

    <div class="right">

      <!--<div class="right-lable">-->
        <!--<span style="margin-left: 20px;">规划设计</span>-->
      <!--</div>-->

      <div class="right-main">
        <nuxt-child />
      </div>
    </div>
    <!--<div style="position:fixed;bottom:15%;right:0px;">-->
        <!--<div style="text-align: center;">-->
            <!--&lt;!&ndash;595676978,1354903928&ndash;&gt;-->
            <!--<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=595676978&site=qq&menu=yes"><img border="0" src="http://wpa.qq.com/pa?p=2:1354903928:53" alt="点击这里给我发消息" title="点击这里给我发消息"/></a>-->
        <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import { appRouter } from './router'

export default {
  head () {
    return {
      title: '城市情景决策支持系统'
    }
  },
  data () {
    return {
      appRouter: appRouter
    }
  },
  mounted () {
    this.setCurrentUser()
    this.$router.push({
      path: '/main/planningManage/requirementCommit'
    })
  },
  methods: {
    goto (active) {
      let ps = active.split('-')
      this.$router.push({
        path: '/main/' + ps[0] + '/' + ps[1]
      })
    },
    logout () {
      this.$router.push({
        path: '/login'
      })
    },
    async setCurrentUser () {
      let {data} = await axios.post('/api/users/getCurrentUser')
      this.$store.commit('setCurrentUser', data)
    }
  }
}
</script>

<style scoped>
  .main{
    background: #020817;
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .top{
    width: 100%;
    height: 100px;
  }
  .top-logo{
    background-image: url("../assets/img/top-logo.png");
    display: inline-block;
    float: left;
    height: 60px;
    margin-top: 20px;
    width: 400px;
    background-repeat: no-repeat;
    color: white;
  }
  .top-user{
    display: inline-block;
    float: right;
    margin-top: 10px;
    color: white;
    margin-right: 20px;
  }
  .left{
    display: inline-block;
    width: 240px;
    float: left;
  }
  .right{
    display: inline-block;
    width: calc(100% - 240px);
    float: left;
    padding-left: 10px;
  }
  .right-lable{
    height: 50px;
    width: 100%;
    color: white;
    background-color: #061630;
    font-size: 20px;
    line-height: 50px;
  }
  .right-main{
    position: absolute;
    width: auto;
  }
  .menu-item{

  }
  .menu-item a {
    color: #fff;
  }
  .menu-item a:hover {
    font-weight: bold;
  }
</style>
