import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Suibian from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'YZ',
      component: Suibian
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
