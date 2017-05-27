import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Contato from '@/components/Contato'
import Preco from '@/components/Preco'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/contato',
      name: 'Contato',
      component: Contato
    },
    {
      path: '/preco',
      name: 'Preco',
      component: Preco
    }
  ]
})
