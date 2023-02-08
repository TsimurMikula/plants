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
        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header__nav_active');
            });
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


(function () {
    
    const serviceButton1 = document.querySelector('.service__button_item1');
    const serviceButton2 = document.querySelector('.service__button_item2');
    const serviceButton3 = document.querySelector('.service__button_item3');

    const serviceCards1 = document.querySelectorAll('.service-card__border1');
    const serviceCards2 = document.querySelectorAll('.service-card__border2');
    const serviceCards3 = document.querySelectorAll('.service-card__border3');

        serviceButton1.addEventListener('click', () => {
            serviceCards1.forEach(serviceCard => {
                if (serviceCard.classList.contains('service-card__border_blur')) {   
                    serviceCard.classList.remove('service-card__border_blur')
                }
            })
            serviceCards2.forEach(serviceCard => {
                serviceCard.classList.toggle('service-card__border_blur')
            })
            serviceCards3.forEach(serviceCard => {
                serviceCard.classList.toggle('service-card__border_blur')
            })
        })
        serviceButton2.addEventListener('click', () => {
            serviceCards2.forEach(serviceCard => {
                if (serviceCard.classList.contains('service-card__border_blur')) {   
                    serviceCard.classList.remove('service-card__border_blur')
                }
            })
            serviceCards1.forEach(serviceCard => {
                serviceCard.classList.toggle('service-card__border_blur')
            })
            serviceCards3.forEach(serviceCard => {
                serviceCard.classList.toggle('service-card__border_blur')
            })
        })
        serviceButton3.addEventListener('click', () => {
            serviceCards3.forEach(serviceCard => {
                if (serviceCard.classList.contains('service-card__border_blur')) {   
                    serviceCard.classList.remove('service-card__border_blur')
                }
            })
            serviceCards1.forEach(serviceCard => {
                serviceCard.classList.toggle('service-card__border_blur')
            })
            serviceCards2.forEach(serviceCard => {
                serviceCard.classList.toggle('service-card__border_blur')
            })
        })


    const serviceButtons = document.querySelectorAll('.service__button_item');

    serviceButtons.forEach(serviceButton => {
        serviceButton.addEventListener('click', () => {
            serviceButton.classList.toggle('service__button_item-active')
            })
        })
}());

(function () {
    const selectTitle = document.querySelector('.contacts__select_title');
    const selectContent = document.querySelector('.contacts__select_content');
    const selectItems = document.querySelectorAll('.contacts__select_content-item');
    const selectIcon = document.querySelector('.contacts__icon');

    selectTitle.addEventListener('click', () => {
        selectTitle.classList.toggle('is-open');
        selectIcon.classList.toggle('rotate');

    });

    selectItems.forEach(selectItem => {
        selectItem.addEventListener('click', () => {
            selectTitle.classList.remove('is-open');
            selectTitle.innerText = selectItem.innerText;
            selectContent.classList.toggle('open');
        })
    })

       
}());