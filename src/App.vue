<template>
  <div id="app" class="page-container">
    <!--头部导航-->
    <mt-header fixed  title="首页">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button  slot="right">登录/注册</mt-button>
    </mt-header>
    <!--中间内容区域-->
    <router-view/>
     <!--底部导航-->
     <div class="foot-bar">
       <ul>
         <li v-for="bar in footbars" :key="bar.id">
           <router-link :to="bar.router">
             <img :src="bar.imgsrc"/>
             <p>{{bar.title}}</p>
           </router-link>
         </li>
       </ul>
     </div>


    <!-- <mt-tabbar v-model="selected" :fixed="fixed">
      <mt-tab-item id="home">
        <img slot="icon" src="./assets/img/index.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="vip">
        <img slot="icon" src="./assets/img/vip.png">
        会员
      </mt-tab-item>
      <mt-tab-item id="cart">
        <img slot="icon" src="./assets/img/shopcart.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="./assets/img/search.png">
        查找
      </mt-tab-item>
  </mt-tabbar> -->
  </div>
</template>

<script>
import home from "./assets/img/index.png"
import vip from "./assets/img/vip.png"
import shopcart from "./assets/img/shopcart.png"
import search from "./assets/img/search.png"

export default {
  name: 'App',
  data() {
    return {
      selected:'',
      fixed:true,
      footbars:[
        {id:1,title:"首页",imgsrc:home,router:{name:"home"}},
        {id:2,title:"会员",imgsrc:vip,router:{name:"vip"}},
        {id:3,title:"购物车",imgsrc:shopcart,router:{name:"cart"}},
        {id:4,title:"查找",imgsrc:search,router:{name:"search"}}
      ]

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

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center
}
.foot-bar ul{
    width: 100%;
    background-image: -webkit-gradient(linear, left top, left bottom, from(#d9d9d9), color-stop(50%, #d9d9d9), color-stop(50%, transparent));
    background-image: linear-gradient(180deg, #d9d9d9, #d9d9d9 50%, transparent 50%);
    background-size: 100% 1px;
    background-repeat: no-repeat;
    background-position: top left;
    position: fixed;
    background-color: #fafafa;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    position: absolute;
    text-align: center;
}
.foot-bar li {
    display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-decoration: none;
}
.foot-bar li a{
    padding: 7px 0;
    width: 100%;
    height: 100%;
    display: inline-block;
    box-sizing: border-box;
}
</style>
