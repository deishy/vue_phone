// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import Vant from 'vant'
import 'vant/lib/index.css'
import vueAplayer from 'vue-aplayer'

Vue.config.productionTip = false
Vue.use(Vant)
new Vue({
    el: '#app',
    router,
    components: { App, vueAplayer },
    template: '<App/>'
})