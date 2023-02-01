(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__nav-close')
    
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav_active');
    });
    menuCloseItem.addEventListener('click', () => {
            menu.classList.remove('header__nav_active');
    });
    const menuLinks = document.querySelectorAll('.header__link');
        if (window.innerWidth < 380) {
            for (let i = 0; i < menuLinks.length; i += 1) {
                menuLinks[i].addEventListener('click', () => {
                    menu.classList.remove('header__nav_active');
                });
            }
        }
}());

console.log('1. Вёрстка валидная +10\n2. Вёрстка семантическая +20\n3. Вёрстка соответствует макету +48\n4. Требования к css + 12\n5. Интерактивность, реализуемая через css +20\nИтоговая оценка: 100 баллов.');
console.log('1. Вёрстка соответствует макету. Ширина экрана 768px +24\n2. Вёрстка соответствует макету. Ширина экрана 380px +24\n3. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n4. На ширине экрана 380рх и меньше реализовано адаптивное меню +22 (Допускается появление адаптивного меня на ширине более 380, но не допускается на ширине более 770px)');

(function () {
    const pricesAccourdion= document.querySelectorAll('.price__accourdion_title');
    
    pricesAccourdion.forEach(priceAccourdion => {
        priceAccourdion.addEventListener('click', () => {
            if (priceAccourdion.classList.contains('is-open')) {
                priceAccourdion.classList.remove('is-open');
            } else {
                const pricesAccourdionWithIsOpen = document.querySelectorAll('.is-open');
                pricesAccourdionWithIsOpen.forEach(priceAccourdionWithIsOpen => {
                    priceAccourdionWithIsOpen.classList.remove('is-open');
                });
                priceAccourdion.classList.add('is-open');
            } 
        }); 
    });
}());

(function () {
    const pricesAccourdionIcon = document.querySelectorAll('.price__accourdion_title-icon')
   pricesAccourdionIcon.forEach(priceAccourdionIcon => {
    priceAccourdionIcon.addEventListener('click', () => {
    pricesAccourdionIcon.classList.toggle('price__accourdion_title-iconTransform');
    })
    })
}());