const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
      {
        code: "white",
        img: "./img/air3.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
      {
        code: "red",
        img: "./img/jordan3.png"
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
      {
        code: "black",
        img: "./img/blazer3.png"
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
      {
        code: "pink",
        img: "./img/crater3.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
      {
        code: "green",
        img: "./img/hippie3.png",
      }
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const productDesc = document.querySelector(".productDesc");

function updateProductDescription() {
  if (choosenProduct.id === 2) {
    productDesc.textContent = "Soar to new heights with the legendary Air Jordan. Designed for peak performance on the court, these iconic sneakers boast innovative cushioning technology and a sleek design. From the game-changing moves of Michael Jordan to the streets today, Air Jordans remain a symbol of athletic excellence and timeless style.";
  } 
  else if (choosenProduct.id === 3){ 
    productDesc.textContent = "Crafted for both comfort and style, the Blazer transcends generations. Originally a court dominator, it's become a versatile favorite. The Blazer's clean lines, supportive upper, and vulcanized sole provide a smooth ride, whether you're cruising the streets or hitting the skatepark.";
  }
  else if (choosenProduct.id === 4){
    productDesc.textContent = "Step into the future with the Crater. Showcasing innovative design and a commitment to sustainability, these sneakers feature a Crater foam midsole made with recycled materials. The Crater's bold aesthetic and comfortable construction make it a perfect choice for the eco-conscious trendsetter.";
  }
  else if (choosenProduct.id === 5){
    productDesc.textContent = "Embrace a laid-back vibe with the Hippie. Crafted with sustainable materials and featuring a deconstructed, sock-like fit, these sneakers prioritize comfort and eco-consciousness. The Hippie's unique design offers a relaxed feel for everyday adventures.";
  }
}

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    choosenProduct = products[index];

    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
    updateProductDescription();
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

$(document).ready(function() {
  $('.buyButton').click(function(e) {
    e.preventDefault();

    var targetOffset = $('#product').offset().top;

    $('html, body').animate({
      scrollTop: targetOffset
    }, 1500);
  });
});

const checkoutButton = document.querySelector('.payButton');

checkoutButton.addEventListener('click', function() {
  const nameInput = document.querySelector('.payInput[placeholder="John Doe"]');
  const phoneInput = document.querySelector('.payInput[placeholder="+1 234 5678"]');
  const addressInput = document.querySelector('.payInput[placeholder="Elton St 21 22-145"]');
  const cardNumberInput = document.querySelector('.payInput[placeholder="Card Number"]');
  const monthInput = document.querySelector('.payInput[placeholder="mm"]');
  const yearInput = document.querySelector('.payInput[placeholder="yyyy"]');
  const cvvInput = document.querySelector('.payInput[placeholder="cvv"]');

  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(message => message.remove());

  let isValid = true;

  if (nameInput.value.trim() === '') {
    isValid = false;
    const nameError = document.createElement('span');
    nameError.classList.add('error-message');
    nameError.textContent = 'Please enter your name.';
    nameInput.parentNode.insertBefore(nameError, nameInput.nextSibling);
  }

  if (phoneInput.value.trim() === '') {
    isValid = false;
    const phoneError = document.createElement('span');
    phoneError.classList.add('error-message');
    phoneError.textContent = 'Please enter your phone number.';
    phoneInput.parentNode.insertBefore(phoneError, phoneInput.nextSibling);
  }

  if (addressInput.value.trim() === '') {
    isValid = false;
    const addressError = document.createElement('span');
    addressError.classList.add('error-message');
    addressError.textContent = 'Please enter your address.';
    addressInput.parentNode.insertBefore(addressError, addressInput.nextSibling);
  }

  if (cardNumberInput.value.trim() === '' || isNaN(cardNumberInput.value)) {
    isValid = false;
    const cardNumberError = document.createElement('span');
    cardNumberError.classList.add('error-message');
    cardNumberError.textContent = 'Please enter a valid card number.';
    cardNumberInput.parentNode.insertBefore(cardNumberError, cardNumberInput.nextSibling);
  }

  if (monthInput.value.trim() === '' || parseInt(monthInput.value) < 1 || parseInt(monthInput.value) > 12) {
    isValid = false;
    const monthError = document.createElement('span');
    monthError.classList.add('error-message');
    monthError.textContent = 'Please enter a valid expiration month (1-12).';
    monthInput.parentNode.insertBefore(monthError, monthInput.nextSibling);
  }

  if (yearInput.value.trim() === '' || parseInt(yearInput.value) < new Date().getFullYear()) {
    isValid = false;
    const yearError = document.createElement('span');
    yearError.classList.add('error-message');
    yearError.textContent = 'Please enter a valid expiration year (future year).';
    yearInput.parentNode.insertBefore(yearError, yearInput.nextSibling);
  }

  if (cvvInput.value.trim() === '') {
    isValid = false;
    const cvvError = document.createElement('span');
    cvvError.classList.add('error-message');
    cvvError.textContent = 'Please enter your CVV code.';
    cvvInput.parentNode.insertBefore(cvvError, cvvInput.nextSibling);
  }

  if (isValid) {
    alert('Transaction completed. Thank you for buying!');
  }
});

