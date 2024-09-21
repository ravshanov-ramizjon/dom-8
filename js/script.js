const slides = document.querySelectorAll('.offer__slide')
const prev = document.querySelector('.offer__slider-prev')
const next = document.querySelector('.offer__slider-next')
const current_view = document.querySelector('#current')
let slideIndex = 0


showSlide()

function showSlide(n) {
    if (n < 0) {
        slideIndex = slides.length - 1
    }

    if (n > slides.length - 1) {
        slideIndex = 0
    }

    current_view.innerHTML = `0${slideIndex + 1}`

    slides.forEach(slide => slide.classList.add('hide', 'fade'))
    slides[slideIndex].classList.remove('hide')
}


next.onclick = () => {
    slideIndex++
    showSlide(slideIndex)
}
prev.onclick = () => {
    slideIndex--
    showSlide(slideIndex)
}
const tabs = document.querySelectorAll('.tabcontent')
const tabsButtons = document.querySelectorAll('.tabheader__item')

showTabs(0)
function showTabs(n) {
    tabs.forEach(tab => tab.classList.add('hide', 'fade'))
    tabs[n].classList.remove('hide')
}

tabsButtons.forEach((btn, idx) => {
    btn.onclick = () => {
        showTabs(idx)
        tabsButtons.forEach((elem) => elem.classList.remove('tabheader__item_active'));

        btn.classList.add('tabheader__item_active');

    }
})
const modalShow = document.querySelector('.modal');
const btnModals = document.querySelectorAll('[data-modal]');
const modalClose = document.querySelector('.modal__close');

btnModals.forEach(btn => {
    btn.onclick = () => {
        modalShow.classList.add('show');
    };
});

modalClose.onclick = () => {
    modalShow.classList.remove('show');
};

document.querySelectorAll('.header__link').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        let targetSelector = link.getAttribute('data-target');
        let target = document.querySelector(targetSelector);

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});



