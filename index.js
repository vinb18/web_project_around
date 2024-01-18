import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import {
  selectorsConfig,
  popupImage,
  keyHandler,
  togglePopup,
} from "./utils.js";

const buttonEdit = document.querySelector(".button_edit");
const popupProfile = document.querySelector(".popup");
const buttonClose = document.querySelector(".button_close");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const profileForm = document.forms.edit;
const inputName = profileForm.elements.name;
const job = profileForm.elements.job;
const buttonAdd = document.querySelector(".button_add");
const popupAdd = document.querySelector(".popup_add");
const buttonCloseAdd = popupAdd.querySelector(".button_close");
const inputTitle = document.querySelector(".popup__item_title");
const inputUrl = document.querySelector(".popup__item_url");
const cardForm = document.forms.add;
const buttonCloseImage = popupImage.querySelector(".button_close");

buttonEdit.addEventListener("click", function () {
  inputName.value = profileName.textContent;
  job.value = profileJob.textContent;
  togglePopup(popupProfile);
});

buttonAdd.addEventListener("click", function () {
  togglePopup(popupAdd);
});

buttonCloseAdd.addEventListener("click", function () {
  togglePopup(popupAdd);
});

buttonClose.addEventListener("click", function () {
  togglePopup(popupProfile);
});

buttonCloseImage.addEventListener("click", function () {
  togglePopup(popupImage);
});

profileForm.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = job.value;
  togglePopup(popupProfile);
});

cardForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const newCard = new Card(inputTitle.value, inputUrl.value, "#card-template");
  elementsSection.prepend(newCard.generateCard());
  cardForm.reset();
  togglePopup(popupAdd);
});

const initialCards = [
  {
    name: "Arizona",
    link: "./images/Arizona.jpg",
  },
  {
    name: "Gatlinburg",
    link: "./images/Gatlinburg.jpg",
  },
  {
    name: "Oregon",
    link: "./images/Oregon.jpg",
  },
  {
    name: "Washington",
    link: "./images/Washington.jpg",
  },
  {
    name: "Yellowstone",
    link: "./images/Yellowstone.jpg",
  },
  {
    name: "Parque Nacional Zion",
    link: "./images/Zion.jpg",
  },
];

//Contenedor donde se insertan las tarjetas
const elementsSection = document.querySelector(".elements");

//Iterar sobre las tarjetas
initialCards.forEach((item) => {
  const newCard = new Card(item.name, item.link, "#card-template");
  elementsSection.append(newCard.generateCard());
});

const overlays = document.querySelectorAll(".popup__overlay");

overlays.forEach((overlay) => {
  overlay.addEventListener("click", function (event) {
    const popup = overlay.closest(".popup");
    togglePopup(popup);
  });
});

Array.from(document.querySelectorAll(selectorsConfig.formSelector)).forEach(
  (formElement) => {
    const formValidator = new FormValidator(selectorsConfig, formElement);
    formValidator.enableValidation();
  }
);
