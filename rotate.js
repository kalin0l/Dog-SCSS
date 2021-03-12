const nav = document.querySelector('.navigation__circle');
const btnOpen = document.querySelector('.navigation__button--open');
const btnClose = document.querySelector('.navigation__button--close');
const main = document.querySelector('main');
const hiddenNav = document.querySelector('.rotate-nav');
const lis = document.querySelectorAll('.rotate-nav__list--item');



btnOpen.addEventListener('click', function () {
    nav.classList.add('active');
    main.classList.add('show-nav');
    hiddenNav.style.display = 'block';
})

btnClose.addEventListener('click', function () {
    nav.classList.remove('active');
    main.classList.remove('show-nav');
    hiddenNav.style.display = 'none';
})





