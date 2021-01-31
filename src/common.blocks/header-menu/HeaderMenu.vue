<template>
    <div class="header-menu" @mouseleave="mouseLeave">
        <div class="header-menu__left">
            <simple-bar class="header-menu__main" ref="scroll" data-simplebar-auto-hide="false">
                <header-menu-item v-for="({text, link}, key) in menuItems" :key="`main_item_${key}`" @hover="hoverMain"
                                  v-bind="{text, link, value: key, active: activeMainItem === key, className: 'main'}"></header-menu-item>
            </simple-bar>
        </div>
        <div class="header-menu__right">
            <simple-bar class="header-menu__submenu" ref="scroll" data-simplebar-auto-hide="false">
                <header-menu-item v-for="({text, link}, key) in submenuItems" :key="`submenu_item_${key}`" @hover="hoverSubmenu"
                                  v-bind="{text, link, value: key, className: 'submenu'}"></header-menu-item>
            </simple-bar>
            <div class="header-menu__info">{{info}}</div>
        </div>
    </div>
</template>

<script>
    import HeaderMenuItem from "./HeaderMenuItem.vue";
    import simpleBar from 'simplebar-vue';

    export default {
        name: "HeaderMenu",

        components: {
            HeaderMenuItem,
            simpleBar
        },

        props: {
            menuItems: {
                types: [Array, Object],
            },
        },

        data() {
            return {
                activeMainItem: null,
                activeSubmenuItem: null,
            }
        },

        computed: {
            info() {
                return this.activeSubmenuItem === null ? null : this.menuItems[this.activeMainItem]['submenu'][this.activeSubmenuItem]['info'];
            },
            submenuItems() {
                return this.activeMainItem === null ? null : this.menuItems[this.activeMainItem]['submenu'];
            }
        },

        methods: {
            hoverMain({value}) {
                this.activeMainItem = value;
                this.activeSubmenuItem = null;
            },
            hoverSubmenu({value}) {
                this.activeSubmenuItem = value;
            },
            mouseLeave() {
                this.activeMainItem = null;
                this.activeSubmenuItem = null;
            }
        },
    }
</script>