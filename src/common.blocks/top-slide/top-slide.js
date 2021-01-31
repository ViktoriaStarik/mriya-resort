export default context => context.forEach(element => {
    const el = element.querySelector('.top-slide__scroll-button'),
        scrollTo = el.dataset.scrollTo,
        elementScrollTo = document.querySelector(scrollTo);

    el.addEventListener('click', () => {
        elementScrollTo.scrollIntoView({
            behavior: "smooth"
        });
    });
});