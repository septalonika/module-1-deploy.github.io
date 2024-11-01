const burgerBtn = document.getElementsByClassName("burger-btn")[0];
const burgerMenu = document.getElementsByClassName("burger-menu")[0];
const burgerMenuOuter =
  document.getElementsByClassName("burger-menu-outer")[0];

burgerMenuOuter.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  burgerMenuOuter.classList.toggle("active");
});

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  burgerMenuOuter.classList.toggle("active");
});


const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const name = urlParams.get('name');

const roomName = urlParams.get('roomName')

const email = urlParams.get('email')

const successText = document.getElementById('success-text')
successText.textContent = `hi ${name}, you have booked ${roomName} room, we have sent you an email to ${email}, thank you!`;

