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

const paramValue = urlParams.get('room');

console.log(paramValue);



const imgElement = document.getElementById("dynamicImg");

imgElement.src = `../assets/images/${paramValue}.jpg`; 

const roomName = document.getElementById("roomName");

roomName.value = paramValue;

