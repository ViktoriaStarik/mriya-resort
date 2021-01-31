import {Swiper, Navigation} from 'swiper';

Swiper.use([Navigation]);

export default context => context.forEach(element => {
    const
        prevButton = element.querySelector('.vacation-preview-slider__button_prev'),
        nextButton = element.querySelector('.vacation-preview-slider__button_next'),

        swiper = new Swiper(element, {
            slidesPerView: 1,
            slidesPerColumn: 2,
            slidesPerColumnFill: 'row',
            spaceBetween: 32,
            navigation: {
                nextEl: nextButton,
                prevEl: prevButton,
            },
            breakpoints: {
                1440: {
                    slidesPerView: 3,
                    slidesPerColumn: 1,
                    slidesPerColumnFill: 'column',
                    spaceBetween: 40,
                }
            }
        });
});