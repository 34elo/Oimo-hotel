const modal = document.getElementById('myModal');
const ArrayOfOpenBtns = document.querySelectorAll('.services-section__item');
const closeBtn = document.querySelector('.close');
const text = document.getElementById('modal-text');
const header = document.getElementById('modal-header');

const format = {
  'family': ['Семейные номера', 'Просторные номера, идеально подходящие для размещения семей с детьми.'],
  'smoking': ['Номера для некурящих', 'Комфортабельные номера, где курение строго запрещено, обеспечивая свежий воздух.'],
  'transfer': ['Трансфер до отеля', 'Удобный и надежный трансфер от аэропорта или вокзала прямо до дверей отеля.'],
  'parking': ['Парковка', 'Бесплатное парковочное место для вашего автомобиля на территории отеля.'],
  'wifi': ['Бесплатный Wi-Fi', 'Высокоскоростной Wi-Fi доступен бесплатно во всех зонах отеля.'],
  'breakfast': ['Завтраки', 'Начните свой день с вкусного и разнообразного завтрака, включенного в стоимость номера.']
};

ArrayOfOpenBtns.forEach((element) => {
  element.addEventListener('click', () => {
    modal.style.display = 'block';
    header.textContent = format[element.id][0];
    text.textContent = format[element.id][1];
  });
});
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
