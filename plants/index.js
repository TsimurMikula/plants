console.log('1. Вёрстка валидная +10\n2. Вёрстка семантическая +20\n3. Вёрстка соответствует макету +48\n4. Требования к css + 12\n5. Интерактивность, реализуемая через css +20\nИтоговая оценка: 100 баллов.');

// Burger handler

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__nav-close')
    burgerItem.addEventListener ('click', () => {
        menu.classList.add('header__nav_active');
    });
        menuCloseItem.addEventListener('click', () => {
            menu.classList.remove('header__nav_active');
    });
}());