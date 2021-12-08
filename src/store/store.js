import Vue from 'vue'
import Vuex from 'vuex'

import { userStore } from './user.store.js'
import { stayStore } from './stay.store.js'
import { orderStore } from './order.store.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  modules: {
    userStore,
    stayStore,
    orderStore
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
})
