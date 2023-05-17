//найти нужные узлы
const popupButton = document.querySelector('.popup-menu__button');
const popupWrapper = document.querySelector('.popup-menu');
const popupMenu = document.querySelector('.popup-menu__list');

//выполним функцию клика по кнопке
popupButton.addEventListener('click', handleMenu);

//функция, показывающая и скрывающая попап
function handleMenu() {
    popupMenu.classList.toggle('hide-popup');
}

//функция при клике на любое место экрана
document.addEventListener('click', hidePopup);
function hidePopup(el) {
    //проверяем есть ли на месте клика попап-меню или кнопка
    let targetInside = popupWrapper.contains(el.target);

    //если нет, то прячем меню
    if(!targetInside) {
        popupMenu.classList.add('hide-popup');
    }
    else {
        return;
    }
}