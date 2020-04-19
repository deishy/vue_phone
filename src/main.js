// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import Vant from 'vant';
import 'vant/lib/index.css';
import Player from 'zw-player'
Vue.config.productionTip = false
Vue.use(Vant)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App, Player },
    template: '<App/>'
})