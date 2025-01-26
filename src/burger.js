if (innerWidth){
  const burgerBtn = document.querySelector('.header__hamburger');
  const navMenu = document.querySelector('.header__nav');
  const items = Array.from(document.querySelectorAll('.nav__item a'));

  let isToogle = false;

  items.forEach((item) => {
    item.addEventListener('click', () => {
      navMenu.style.display = 'none';
      isToogle = false;
    });
  });

  burgerBtn.addEventListener('click', () => {
    if (isToogle) {
      navMenu.style.display = 'none';
      isToogle = false;
    } else {
      isToogle = true;
      navMenu.style.display = 'block';
    }
  });
}