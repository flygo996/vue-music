import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/views/Recommend.vue'
const Rank = () => import('@/views/Rank.vue')
const Singer = () => import('@/views/Singer.vue')
const Search = () => import('@/views/Search.vue')
const SingerDetail = () => import('@/views/SingerDetail.vue')
const Disc = () => import('@/views/Disc.vue')
const TopList = () => import('@/views/TopList.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/recommend',
    },
    {
      path: '/recommend',
      name: '推荐',
      component: Recommend,
      children: [
        {
          path: ':id',          
          name: 'disc',          
          component: Disc
        }
      ]
    },
    {
      path: '/rank',
      name: '排行',
      component: Rank,
      children: [
        {
          path: ':id',
          name: '排行',
          component: TopList
        }
      ]
    },
    {
      path: '/singer',
      name: '歌手',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/search',
      name: '搜索',
      component: Search,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
  ]
})
