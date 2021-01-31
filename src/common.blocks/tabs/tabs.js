export default context => context.forEach(element => {
    const nav = element.querySelector('.tabs__nav'),
        navItems = nav.querySelectorAll('.tabs__nav-item'),
        content = element.querySelector('.tabs__content'),
        contentItems = content.querySelectorAll('.tabs__content-item');

    nav.insertAdjacentHTML('beforeend', `<div class="tabs__nav-highlight"></div>`);

    const highlight = nav.querySelector('.tabs__nav-highlight');

    navItems.forEach(element => {
        element.addEventListener('click', function () {
            const alias = this.dataset.tab;

            navItems.forEach(e => {
                e.classList.remove('tabs__nav-item_active');
            });
            this.classList.add('tabs__nav-item_active');

            highlight.style.width = `${this.offsetWidth}px`;
            highlight.style.left = `${this.offsetLeft}px`;

            contentItems.forEach(e => {
                e.classList.remove('tabs__content-item_active');

                if (e.dataset.tab !== alias) return;
                e.classList.add('tabs__content-item_active');
            });
        });
    });

    let event = new Event("click");
    navItems[0].dispatchEvent(event);
});