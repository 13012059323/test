<template>
  <div id="app">
    <!--头部导航-->
    <mt-header title="首页">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button  slot="right">登录/注册</mt-button>
    </mt-header>
    <!--中间内容区域-->
    <router-view/>
     <!--底部导航-->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <img slot="icon" src="./assets/index.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="member">
        <img slot="icon" src="./assets/member.png">
        会员
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="./assets/shopcart.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="./assets/search.png">
        查找
      </mt-tab-item>
  </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      selected:''
    }
  },
  watch:{
    selected(newV,oldV){
     this.$router.push(this.selected);
    }
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center
}
</style>
