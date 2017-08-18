import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Suibian from '@/components/Test'
import Form from '@/components/Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'YZ',
      component: Suibian
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/form',
      name: '???',
      component: Form
    }
  ]
})
