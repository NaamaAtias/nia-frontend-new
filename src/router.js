import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'
import stayApp from './views/stay-app.vue'
import reviewApp from './views/review-app.vue'
import loginSignup from './views/login-signup.vue'
import userDetails from './views/user-details.vue'
import stayDetails from './views/stay-details.vue'
// import stayEdit from './views/stay-edit.vue'
import host from './views/host.vue'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/stay',
      name: 'stayApp',
      component: stayApp
    },
    {
      path: '/stay/:id',
      name: 'stayDetails',
      component: stayDetails
    },
    // {
    //   path: '/stay/edit/:id',
    //   name: 'stayEdit',
    //   component: stayEdit
    // },
    {
      path: '/review',
      name: 'review',
      component: reviewApp
    },
    {
      path: '/login',
      name: 'loginSignup',
      component: loginSignup
    },
    {
      path: '/user/:id',
      name: 'user-details',
      component: userDetails
    },
    {
      path: '/host',
      name: 'host',
      component: host
    }
  ]
})
