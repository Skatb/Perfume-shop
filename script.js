// скролл при клике
const menuLink = document.querySelectorAll('.menu_link[data-goto]');

if(menuLink.length > 0){
    menuLink.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick)
    });
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

            if(iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}
//бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if(iconMenu){
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
 
}


//слайдеры
let offset = 0; // смещение от левого края
const Sliderline = document.querySelector('.slider-line');

document.querySelector('.Perfume_arrow-right').addEventListener('click', function() {
    offset = offset + 350;
    if (offset > 350) {
        offset = 0;
    }
    Sliderline.style.left = -offset + 'px';
});
document.querySelector('.Perfume_arrow-left').addEventListener('click', function() {
    offset = offset - 350;
    if (offset < 0) {
        offset = 350;
    }
    Sliderline.style.left = -offset + 'px';
});

new Swiper('.compound-slider', {
    navigation: {
        nextEl: '.arrow-button_next',
        prevEl: '.arrow-button_prev',
      },
    loop: true,
    slidesPerView: 2,
    spaceBetween: 60,
    centeredSlide: 'true',
    initialSlide: 0,
    breakpoints: {
        1199.98: {
        slidesPerView: 'auto',
        simulateTouch: false,
        spaceBetween: 120,
        }
    }
});

new Swiper('.Perfume-slider', {
    navigation: {
        nextEl: '.Perfume-slider-right',
        prevEl: '.Perfume-slider-left',
    },
    loop: true,
    spaceBetween: 80,
    initialSlide: 0,
    breakpoints: {
    1199.98: {
        loop: true,
        slidesPerView: 'auto',
        }
    }
});