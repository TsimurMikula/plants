console.log('1. Вёрстка валидная +10\n2. Вёрстка семантическая +20\n3. Вёрстка соответствует макету +48\n4. Требования к css + 12\n5. Интерактивность, реализуемая через css +20\nИтоговая оценка: 100 баллов.');
console.log('1. Вёрстка соответствует макету. Ширина экрана 768px +24\n2. Вёрстка соответствует макету. Ширина экрана 380px +24\n3. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n4. На ширине экрана 380рх и меньше реализовано адаптивное меню +22 (Допускается появление адаптивного меня на ширине более 380, но не допускается на ширине более 770px)');

//Burger menu start

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

//Burger menu end

//Efect blur start

(function () {
    const serviceButton1 = document.querySelector('.service__button_item1');
    const serviceButton2 = document.querySelector('.service__button_item2');
    const serviceButton3 = document.querySelector('.service__button_item3');

    const serviceCards1 = document.querySelectorAll('.service-card__border1');
    const serviceCards2 = document.querySelectorAll('.service-card__border2');
    const serviceCards3 = document.querySelectorAll('.service-card__border3');

    const serviceButtons = document.querySelectorAll('.service__button_item');

        serviceButtons.forEach(serviceButton => {
            serviceButton.addEventListener('click', () => {
                serviceButton.classList.toggle('service__button_item-active')
            })

            if (serviceButton.classList.contains('service__button_item-active') > 2) {
                serviceButton.classList.add('service-card__border_blur')
            }
        })



        serviceButton1.addEventListener('click', () => {
            serviceCards1.forEach(serviceCard => {
                if (serviceCard.classList.contains('service-card__border_blur')) {   
                    serviceCard.classList.remove('service-card__border_blur')
                }               
            })
            serviceCards2.forEach(serviceCard => {
                if (serviceButton2.classList.contains('service__button_item-active')) {
                    serviceCard.classList.remove('service-card__border_blur')
                } 
                else if (!serviceButton1.classList.contains('service__button_item-active')) {
                    serviceCard.classList.remove('service-card__border_blur')
                } else {
                    serviceCard.classList.add('service-card__border_blur')
                }
            })
            serviceCards3.forEach(serviceCard => {
                if (serviceButton3.classList.contains('service__button_item-active')) {
                    serviceCard.classList.remove('service-card__border_blur')
                } 
                else if (!serviceButton1.classList.contains('service__button_item-active')) {
                    serviceCard.classList.remove('service-card__border_blur')
                } else {
                    serviceCard.classList.add('service-card__border_blur')
                }
            })
        })
        serviceButton2.addEventListener('click', () => {
            serviceCards2.forEach(serviceCard => {
                if (serviceCard.classList.contains('service-card__border_blur')) {   
                    serviceCard.classList.remove('service-card__border_blur')
                }
            })
            serviceCards1.forEach(serviceCard => {
                if (serviceButton1.classList.contains('service__button_item-active')) {
                    serviceCard.classList.remove('service-card__border_blur')
                }
                else if (!serviceButton2.classList.contains('service__button_item-active')) {
                    serviceCard.classList.remove('service-card__border_blur')
                } else {
                    serviceCard.classList.add('service-card__border_blur')
                }
            })
            serviceCards3.forEach(serviceCard => {
                if (serviceButton3.classList.contains('service__button_item-active')) {
                    serviceCard.classList.remove('service-card__border_blur')
                } 
                else if (!serviceButton2.classList.contains('service__button_item-active')) {
                    serviceCard.classList.remove('service-card__border_blur')
                } else {
                    serviceCard.classList.add('service-card__border_blur')
                }
            })
        })
        serviceButton3.addEventListener('click', () => {
            serviceCards3.forEach(serviceCard => {
                if (serviceCard.classList.contains('service-card__border_blur')) {   
                    serviceCard.classList.remove('service-card__border_blur')
                }
            })
            serviceCards1.forEach(serviceCard => {
                if (serviceButton1.classList.contains('service__button_item-active')) {
                    serviceCard.classList.remove('service-card__border_blur')
                }
                else if (!serviceButton3.classList.contains('service__button_item-active')) {
                    serviceCard.classList.remove('service-card__border_blur')
                } else {
                    serviceCard.classList.add('service-card__border_blur')
                }
            })
            serviceCards2.forEach(serviceCard => {
                if (serviceButton2.classList.contains('service__button_item-active')) {
                    serviceCard.classList.remove('service-card__border_blur')
                } 
                else if (!serviceButton3.classList.contains('service__button_item-active')) {
                    serviceCard.classList.remove('service-card__border_blur')
                } else {
                    serviceCard.classList.add('service-card__border_blur')
                }
            })
        })
}());

//Efect blur end

//Accourdion start

(function () {
    const pricesAccourdion= document.querySelectorAll('.price__accourdion_title');
    const pricesAccourdionIcon1 = document.querySelector('.price__accourdion_title-icon1');
    const pricesAccourdionIcon2 = document.querySelector('.price__accourdion_title-icon2');
    const pricesAccourdionIcon3 = document.querySelector('.price__accourdion_title-icon3');

    for (let i = 0; i < pricesAccourdion.length; i++) {
        pricesAccourdion[0].addEventListener('click', () => {
            pricesAccourdionIcon1.classList.toggle('price__accourdion_title-iconTransform');
            pricesAccourdionIcon2.classList.remove('price__accourdion_title-iconTransform');
            pricesAccourdionIcon3.classList.remove('price__accourdion_title-iconTransform');
        })
        pricesAccourdion[1].addEventListener('click', () => {
            pricesAccourdionIcon1.classList.remove('price__accourdion_title-iconTransform');
            pricesAccourdionIcon2.classList.toggle('price__accourdion_title-iconTransform');
            pricesAccourdionIcon3.classList.remove('price__accourdion_title-iconTransform');
        })
        pricesAccourdion[2].addEventListener('click', () => {
            pricesAccourdionIcon1.classList.remove('price__accourdion_title-iconTransform');
            pricesAccourdionIcon2.classList.remove('price__accourdion_title-iconTransform');
            pricesAccourdionIcon3.classList.toggle('price__accourdion_title-iconTransform');
        })
    }

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
    const pricesAccourdionIcon = document.querySelectorAll('.price__accourdion_title-icon');
    pricesAccourdionIcon.forEach(priceAccourdionIcon => {
        priceAccourdionIcon.addEventListener('click', () => {
            pricesAccourdionIcon.classList.toggle('price__accourdion_title-iconTransform');
        })
    })
}());

//Accourdion end

//Select start

(function () {
    const selectTitle = document.querySelector('.contacts__select_title');
    const selectTitleText = document.querySelector('.contacts__select_title-text');
    const selectItems = document.querySelectorAll('.contacts__select_content-item');
    const selectContent = document.querySelector('.contacts__select_content');
    const selectContentAddress1 = document.querySelector('.contacts__select_content-address1');
    const selectContentAddress2 = document.querySelector('.contacts__select_content-address2');
    const selectContentAddress3 = document.querySelector('.contacts__select_content-address3');
    const selectIcon = document.querySelector('.contacts__icon');

    selectTitle.addEventListener('click', () => {
        selectTitle.classList.toggle('is-open');
        selectIcon.classList.toggle('rotate');
        selectContent.classList.remove('open1');
        selectContentAddress1.classList.remove('open2');
        selectContentAddress2.classList.remove('open3');
        selectContentAddress3.classList.remove('open4');
    });

    selectItems.forEach(selectItem => {
        selectItem.addEventListener('click', () => {
            selectTitle.classList.remove('is-open');
            selectTitleText.innerHTML = selectItem.innerHTML;

            if (selectItem.classList.contains('contacts__select_content-item1')) {
                selectContent.classList.add('open1'); 
                selectTitle.classList.add('active'); 
                selectIcon.classList.toggle('rotate');
            }
            else if (selectItem.classList.contains('contacts__select_content-item2')) {
                selectContentAddress1.classList.add('open2'); 
                selectTitle.classList.add('active');    
                selectIcon.classList.toggle('rotate');
            }
            else if (selectItem.classList.contains('contacts__select_content-item3')) {
                selectContentAddress2.classList.add('open3');   
                selectTitle.classList.add('active');  
                selectIcon.classList.toggle('rotate');
            }
            else if (selectItem.classList.contains('contacts__select_content-item4')) {
                selectContentAddress3.classList.add('open4');    
                selectTitle.classList.add('active'); 
                selectIcon.classList.toggle('rotate');
            }
        })
    }) 
}());

//Select end