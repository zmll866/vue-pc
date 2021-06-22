import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import global from '@/store/modules/global.js'
import getters from '@/store/getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    getters,
    app,
    settings,
    user
  },
  ...global
})

export default store
