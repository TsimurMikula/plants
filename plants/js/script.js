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

    serviceButton1.addEventListener('click', () => {
      serviceButton2.classList.remove("service__button_item-active");   
      serviceButton3.classList.remove("service__button_item-active");
      serviceButton1.classList.toggle("service__button_item-active");
      if (serviceButton1.classList.contains("service__button_item-active")) {
        serviceCards2.forEach((serviceCard) => {
          serviceCard.classList.add("service-card__border_blur");
        });
        serviceCards3.forEach((serviceCard) => {
          serviceCard.classList.add("service-card__border_blur");
        });
        serviceCards1.forEach((serviceCard) => {
          serviceCard.classList.remove("service-card__border_blur");
        });
      } else {
        serviceCards2.forEach((serviceCard) => {
          serviceCard.classList.remove("service-card__border_blur");
        });
        serviceCards3.forEach((serviceCard) => {
          serviceCard.classList.remove("service-card__border_blur");
        });
      }
    })

    serviceButton2.addEventListener("click", () => {
      serviceButton1.classList.remove("service__button_item-active");
      serviceButton3.classList.remove("service__button_item-active");  
      serviceButton2.classList.toggle("service__button_item-active");
      if (serviceButton2.classList.contains("service__button_item-active")) {
        serviceCards1.forEach((serviceCard) => {
          serviceCard.classList.add("service-card__border_blur");
        });
        serviceCards3.forEach((serviceCard) => {
          serviceCard.classList.add("service-card__border_blur");
        });
        serviceCards2.forEach((serviceCard) => {
          serviceCard.classList.remove("service-card__border_blur");
        });
      } else {
        serviceCards1.forEach((serviceCard) => {
          serviceCard.classList.remove("service-card__border_blur");
        });
        serviceCards3.forEach((serviceCard) => {
          serviceCard.classList.remove("service-card__border_blur");
        });
      }
    });

    serviceButton3.addEventListener("click", () => {
      serviceButton2.classList.remove("service__button_item-active");
      serviceButton1.classList.remove("service__button_item-active");
      serviceButton3.classList.toggle("service__button_item-active");
      if (serviceButton3.classList.contains("service__button_item-active")) {
        serviceCards2.forEach((serviceCard) => {
          serviceCard.classList.add("service-card__border_blur");
        });
        serviceCards1.forEach((serviceCard) => {
          serviceCard.classList.add("service-card__border_blur");
        });
        serviceCards3.forEach((serviceCard) => {
          serviceCard.classList.remove("service-card__border_blur");
        });
      } else {
        serviceCards2.forEach((serviceCard) => {
          serviceCard.classList.remove("service-card__border_blur");
        });
        serviceCards1.forEach((serviceCard) => {
          serviceCard.classList.remove("service-card__border_blur");
        });
      }
    });
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