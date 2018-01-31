import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/view/main'
import Detail from '@/view/detail'
import SubArticle from '@/view/subArticle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/subArticle',
      name: 'SubArticle',
      component: SubArticle
    }
  ]
})
