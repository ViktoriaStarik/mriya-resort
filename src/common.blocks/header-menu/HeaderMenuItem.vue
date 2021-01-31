<template>
    <div class="header-menu__item">
        <a :href="link" :class="`header-menu__link header-menu__link_${className} ${active ? 'header-menu__link_active' : ''}`" @mouseover="mouseOver">{{text}}</a>
    </div>
</template>

<script>
    export default {
        name: "HeaderMenuItem",

        props: {
            text: {
                type: String,
                default: '',
            },
            link: {
                type: String,
                default: 'javascript:;',
            },
            value: {
                type: Number
            },
            active: {
                type: Boolean,
                default: false
            },
            className: {
                type: String,
                default: 'main',
            }
        },

        methods: {
            mouseOver: function(){
                this.$emit('hover', {
                    value: this.value
                });
            },
        },
    }
</script>