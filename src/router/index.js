import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/components/Users'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/projects/apptwo', name: 'Users', component: Users},
    {path: '/projects/apptwo/user/:id', name: 'User', component: User}
  ]
})
