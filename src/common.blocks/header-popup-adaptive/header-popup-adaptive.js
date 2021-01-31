export default context => context.forEach(element => {
    element.querySelectorAll('.header-menu__link_main').forEach(el => {
        el.addEventListener('click', function () {
            this.classList.toggle('header-menu__link_active');
        });
    });
});