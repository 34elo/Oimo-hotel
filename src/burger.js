const burgerBtn = document.querySelector('.burger-menu-btn');
const navMenu = document.querySelector('.header__nav');

burgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});