const slider = document.querySelector('.slider');
const next = document.querySelector('.next-button');
const prev = document.querySelector('.prev-button');

const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let currentSlideIndexes = [0, 1, 2];

next.addEventListener('click', () => {
  currentSlideIndexes = currentSlideIndexes.map(index => {
    let newIndex = index + 1;
    if (newIndex >= slideCount) {
      newIndex = 0;
    }
    return newIndex;
  });
  updateSlider();
});

prev.addEventListener('click', () => {
  currentSlideIndexes = currentSlideIndexes.map(index => {
    let newIndex = index - 1;
    if (newIndex < 0) {
      newIndex = slideCount - 1;
    }
    return newIndex;
  });
  updateSlider();
});


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

updateSlider() // Инициализация слайдера в самом начале