import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import book from '@/components/book'
import music from '@/components/music'
import video from '@/components/video'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: index,
    }, {
        path: '/book',
        name: 'book',
        component: book,
    }, {
        path: '/video',
        name: 'video',
        component: video,
    }, {
        path: '/index',
        name: 'index',
        component: index,
    }]
})