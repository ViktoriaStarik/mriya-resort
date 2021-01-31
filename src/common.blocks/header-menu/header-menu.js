import Vue from 'vue/dist/vue';
Vue.component('header-menu', require('./HeaderMenu.vue').default);

import menuData from './header-menu.json';
const menuItems = menuData.items;

export default context => context.forEach(element => {
    new Vue({
        el: element,
        template: `<header-menu :menuItems="items"></header-menu>`,
        data() {
            return {
                items: {}
            };
        },

        mounted() {
            this.items = menuItems;
        }

    });
});