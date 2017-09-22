import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import other from '@/page/other'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/other',
      component: other
    }
  ]
})
