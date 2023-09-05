window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});



const headerText = document.getElementById('header-text');
const header = document.querySelector('header');
const backgrounds = ['image/background2.jpg', 'image/background3.jpg', 'image/background1.jpg'];
const texts = ['Dünyanın dört bir yanından topladık.', 'En iyi çekirdekler artık çok yakınında.', 'Günlük çekilen daima taze kahve'];

let currentIndex = 0;

function changeHeaderContent() {
  header.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
  headerText.textContent = texts[currentIndex];

  currentIndex = (currentIndex + 1) % backgrounds.length;
}

setInterval(changeHeaderContent, 3000);



window.addEventListener("scroll", function () {
  const navbar = document.querySelector('nav');

  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
