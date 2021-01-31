import {Swiper, Navigation, EffectFade} from 'swiper';

Swiper.use([Navigation, EffectFade]);

export default context => context.forEach(element => {
    const
        prevButton = element.querySelector('.article-preview-slider__button_prev'),
        nextButton = element.querySelector('.article-preview-slider__button_next'),

        swiper = new Swiper(element, {
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            navigation: {
                nextEl: nextButton,
                prevEl: prevButton,
            },
        });
});