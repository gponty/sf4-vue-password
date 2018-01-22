import Vue from 'vue'
import App from './App'

new Vue({
    delimiters: ['${', '}'],

    el: '#app',
    template: '<App/>',
    components: {
        App
    }
})