export default context => context.forEach(element => {
    const nav = element.querySelector('.tabs__nav'),
        navItems = nav.querySelectorAll('.tabs__nav-item'),
        content = element.querySelector('.tabs__content'),
        contentItems = content.querySelectorAll('.tabs__content-item'),

        NAV_ACTIVE_CLASS = 'tabs__nav-item_active',
        CONTENT_ACTIVE_CLASS = 'tabs__content-item_active';

    // Add highlight element to tabs nav.
    nav.insertAdjacentHTML('beforeend', `<div class="tabs__nav-highlight"></div>`);

    const highlight = nav.querySelector('.tabs__nav-highlight');

    navItems.forEach(element => {
        element.addEventListener('click', function () {
            const alias = this.dataset.tab;

            // Set current tab active.
            navItems.forEach(e => {
                e.classList.remove(NAV_ACTIVE_CLASS);
            });
            this.classList.add('tabs__nav-item_active');

            highlight.style.width = `${this.offsetWidth}px`;
            highlight.style.left = `${this.offsetLeft}px`;

            // Show current tab content.
            contentItems.forEach(e => {
                e.classList.remove(CONTENT_ACTIVE_CLASS);

                if (e.dataset.tab !== alias) return;
                e.classList.add(CONTENT_ACTIVE_CLASS);
            });
        });
    });

    // Set first tab active.
    let event = new Event("click");
    navItems[0].dispatchEvent(event);
});