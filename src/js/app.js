import { MODULES_NAMES } from './modulesNames.js';

MODULES_NAMES.forEach(item => {
    import(`../common.blocks/${item}/${item}.js`)
        .then(module => {
            module.default(document.querySelectorAll(`.${item}`));
        });
});
