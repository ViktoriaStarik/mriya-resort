import {Swiper, Navigation, Pagination, Autoplay} from 'swiper';

Swiper.use([Pagination, Autoplay]);

export default context => context.forEach(element => {
    const
        pagination = element.querySelector('.header-popup-slider__pagination'),

        swiper = new Swiper(element, {
            slidesPerView: 1,
            pagination: {
                el: pagination,
                type: 'bullets',
                clickable: true,
                bulletClass: 'header-popup-slider__pagination-bullet',
                bulletActiveClass: 'header-popup-slider__pagination-bullet_active',
                renderBullet: function (index, className) {
                    return `<span class="${className}">
                                <span class="header-popup-slider__pagination-circle">
                                    <span class="header-popup-slider__pagination-circle-half"></span>
                                    <span class="header-popup-slider__pagination-circle-half header-popup-slider__pagination-circle-half_right"></span>
                                </span>
                                </span>`;
                }
            },
            loop: true,
            autoplay: {
                delay: 3000,
            },
        });
});