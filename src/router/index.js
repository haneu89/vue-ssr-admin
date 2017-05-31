import Vue from 'vue'
import Router from 'vue-router'

import Main from '../views/Main.vue'
import View1 from '../views/View1.vue'
import View2 from '../views/View2.vue'
import UserView from '../views/UserView.vue'
import DashView from '../views/admin/Dash.vue'
import Dashboard from '../views/admin/views/Dashboard.vue'
import BaseTitle from '../views/admin/base/BaseTitle.vue'
import Connection from '../views/admin/stats/Connection.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Main },
    { path: '/view1', component: View1 },
    { path: '/view2', component: View2 },
    { path: '/users/:id', component: UserView },
    { path: '/admin',
      component: DashView,
      children: [
      { path: '/', component: Dashboard },
      { path: 'stat', component: Connection },
      { path: 'title', component: BaseTitle }
      ] }
  ]
})
