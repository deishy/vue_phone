// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import Vant from 'vant'
import 'vant/lib/index.css'
import vueAplayer from 'vue-aplayer'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vant, Vuex)
new Vue({
    el: '#app',
    router,
    components: { App, vueAplayer },
    template: '<App/>'
})

new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})