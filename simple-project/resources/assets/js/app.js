
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue';

import vue_routes from './components/vue_routes.js';
import { store } from './store/store';

Vue.use(vue_routes);
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

Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app',
    store
});
