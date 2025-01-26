const slider = document.querySelector('.slider');
const next = document.querySelector('.next-button');
const prev = document.querySelector('.prev-button');

const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;

let currentSlideIndexes = [0, 1, 2]; // Изначально 3 слайда
let slidesToShow = 3;  // Количество показываемых слайдов по умолчанию

function updateSlidesToShow() {
  if (window.innerWidth < 768) {
    slidesToShow = 1;
  } else if (window.innerWidth < 1000) {
    slidesToShow = 2;
  } else {
    slidesToShow = 3;
  }
}

function updateCurrentSlideIndexes() {
  let newCurrentSlideIndexes = [];
  for (let i = 0; i < slidesToShow; i++) {
    newCurrentSlideIndexes.push(currentSlideIndexes[0] + i);
  }
  currentSlideIndexes = newCurrentSlideIndexes.map(index => {
    if (index >= slideCount) {
      return index - slideCount;
    } else {
      return index
    }
  });
}

function nextSlide() {
  updateSlidesToShow();
  currentSlideIndexes = currentSlideIndexes.map(index => {
    let newIndex = index + 1;
    if (newIndex >= slideCount) {
      newIndex = 0;
    }
    return newIndex;
  });
  updateCurrentSlideIndexes();
  updateSlider();
}
function prevSlide() {
  updateSlidesToShow();
  currentSlideIndexes = currentSlideIndexes.map(index => {
    let newIndex = index - 1;
    if (newIndex < 0) {
      newIndex = slideCount - 1;
    }
    return newIndex;
  });
  updateCurrentSlideIndexes();
  updateSlider();
}


next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

function updateSlider() {
  console.log(currentSlideIndexes);
  slides.forEach((slide, i) => {
    if (currentSlideIndexes.includes(i)) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
  console.log('update slider');
}

function initializeSlider(){
  updateSlidesToShow();
  updateCurrentSlideIndexes();
  updateSlider();
}

// Инициализация слайдера в самом начале
initializeSlider();

window.addEventListener('resize', () => {
  initializeSlider();
});