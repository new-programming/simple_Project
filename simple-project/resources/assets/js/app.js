
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('bootstrap');

window.Vue = require('vue');

import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from './config/messages';
import vue_routes from './components/vue_routes.js';
import { store } from './store/store';
import PortalVue from 'portal-vue';
import 'bootstrap/dist/css/bootstrap.css';
import { createPopper } from '@popperjs/core';

Vue.use(createPopper);
Vue.use(vue_routes);
Vue.use(VueI18n);
Vue.use(PortalVue);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

for(var i in vue_routes) {
    var tag = vue_routes[i].tag;
    var dir = vue_routes[i].dir;
    var file = vue_routes[i].file;

    Vue.component(tag, require('' + dir + file));
}

const i18n = new VueI18n({
    locale: 'ja',
    i18n: i18n,
    messages: messages,
})

const app = new Vue({
    el: '#app',
    store,
    i18n: i18n,
});