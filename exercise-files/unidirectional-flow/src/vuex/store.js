// src/vuex/store.js
import Vue from 'vue'
import Vuex from 'vuex'

import products from './modules/products'

// Vuex is add as a middleware / plugin to Vue
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    products
  },
  // strict flag adds some validation and warns
  // us if we try to modify vuex state outside of our mutators
  strict: debug
})
