import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Vip from '@/components/Vip'
import Cart from '@/components/Cart'
import Search from '@/components/Search'
import NewsList from '@/components/NewsList'
import NewsDetail from '@/components/NewsList/datail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/vip',
      name: 'vip',
      component: Vip
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/newslist',
      name: 'news.list',
      component: NewsList
    },
    {
      path: '/newsdatail',
      name: 'news.datail',
      component: NewsDetail
    }
  ]
})
