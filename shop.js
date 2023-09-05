const headerText = document.getElementById('header-text');
const header = document.querySelector('header');
const backgrounds = ['image/background3.jpg', 'image/background2.jpg', 'image/background1.jpg'];
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












let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
// let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
  body.classList.add('active');
})
closeShopping.addEventListener('click', () => {
  body.classList.remove('active');
})

let products = [
  {
    id: 1,
    name: 'Etiopya Filtre Kahve',
    image: 'filter1.png',
    price: 22
  },
  {
    id: 2,
    name: 'Kenya Filtre Kahve',
    image: 'filter2.png',
    price: 20
  },
  {
    id: 3,
    name: 'Brezilya Filtre Kahve',
    image: 'filter3.png',
    price: 21
  },
  {
    id: 4,
    name: 'Kosta Rika Filtre Kahve',
    image: 'filter4.png',
    price: 23
  },
  {
    id: 5,
    name: 'Guatemala Filtre Kahve',
    image: 'filter5.png',
    price: 20
  },
  {
    id: 6,
    name: 'Honduras Filtre Kahve',
    image: 'filter6.png',
    price: 24
  },
  {
    id: 7,
    name: 'Kolombiya Filtre Kahve',
    image: 'filter7.png',
    price: 22
  },
  {
    id: 8,
    name: 'Endonezya Filtre Kahve',
    image: 'filter8.png',
    price: 23
  },
  {
    id: 9,
    name: 'Papua Yeni Gine Filtre Kahve',
    image: 'filter9.png',
    price: 25
  },
  {
    id: 10,
    name: 'Kil Kupa',
    image: 'cup1.png',
    price: 7
  },
  {
    id: 11,
    name: 'Kil Kupa',
    image: 'cup2.png',
    price: 9
  },
  {
    id: 12,
    name: 'Kil Kupa',
    image: 'cup3.png',
    price: 7
  },
  {
    id: 13,
    name: 'Kil Kupa',
    image: 'cup4.png',
    price: 8
  },
  {
    id: 14,
    name: 'Çelik Süzgeç',
    image: 'sieve.png',
    price: 5
  },
  {
    id: 15,
    name: 'Çelik Süzgeç',
    image: 'sieve2.png',
    price: 5
  },
  {
    id: 16,
    name: 'Hediye Sepeti',
    image: 'sepet.png',
    price: 35
  }
];


let listCards = [];
const list = document.getElementById('list'); // "list" id'li div'i seçin

function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add("item", "col-lg-3", "col-sm-2", "m-auto");

    newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">$${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">SEPETE EKLE</button>`;
    list.appendChild(newDiv);
  });
}

initApp();




function addToCard(key) {
  if (listCards[key] == null) {
    // copy product form list to list card
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  reloadCard();
}
function reloadCard() {
  listCard.innerHTML = '';
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement('li');
      newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>$${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
      listCard.appendChild(newDiv);
    }
  })
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}

