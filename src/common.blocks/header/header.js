export default context => context.forEach(element => {
    const hamburger = element.querySelector('.header__hamburger'),
        popup = element.querySelector('.header__header-popup');
    hamburger.addEventListener('click', () => {
        popup.classList.toggle('header-popup_opened');
        hamburger.classList.toggle('hamburger_close');
        document.body.classList.toggle('no-scroll');
    });
});