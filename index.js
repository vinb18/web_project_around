import Card from "./scripts/Card.js";
import FormValidator from "./scripts/FormValidator.js";
import { selectorsConfig } from "./scripts/utils.js";
import PopupWithImage from "./scripts/PopupWithImage.js";
import PopupWithForm from "./scripts/PopupWithForm.js";
import Section from "./scripts/section.js";
import UserInfo from "./scripts/UserInfo.js";

const popupProfileSelector = ".popup_profile";
const popupAddSelector = ".popup_add";
const popupImageSelector = ".popup_image";

const popupImage = new PopupWithImage(popupImageSelector);
const popupProfile = new PopupWithForm(popupProfileSelector, (inputValues) => {
  profileName.textContent = inputValues.name;
  profileJob.textContent = inputValues.job;
  popupProfile.close();
});

const popupAddButton = new PopupWithForm(popupAddSelector, (inputValues) => {
  const newCard = new Card(
    inputValues.title,
    inputValues.url,
    "#card-template",
    {
      handleClickImage: () => {
        popupImage.open(inputValues.link, inputValues.title);
      },
    }
  );
  elementsSection.prepend(newCard.generateCard());
});

const userInfo = new UserInfo({
  usernameSelector: ".profile__name",
  jobSelector: ".profile__job",
});

const buttonEdit = document.querySelector(".button_edit");
/* const popupProfile = document.querySelector(".popup"); */
//const buttonClose = document.querySelector(".button_close");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const profileForm = document.forms.edit;
const inputName = profileForm.elements.name;
const job = profileForm.elements.job;
const buttonAdd = document.querySelector(".button_add");
/* const popupAdd = document.querySelector(".popup_add"); */
//const buttonCloseAdd = popupAdd.querySelector(".button_close");
//const inputTitle = document.querySelector(".popup__item_title");
//const inputUrl = document.querySelector(".popup__item_url");
//const cardForm = document.forms.add;
// const buttonCloseImage = popupImage.querySelector(".button_close");
//const defaultCard = new Section({ data: items }, containerSelector);

buttonEdit.addEventListener("click", function () {
  const userData = userInfo.getUserInfo();
  inputName.value = userData.username;
  job.value = userData.job;
  popupProfile.open();
});

buttonAdd.addEventListener("click", () => {
  popupAddButton.open();
});

/* buttonCloseAdd.addEventListener("click", function () {
  togglePopup(popupAdd);
});

buttonClose.addEventListener("click", function () {
  togglePopup(popupProfile);
});

buttonCloseImage.addEventListener("click", function () {
  togglePopup(popupImage);
}); */

/*
profileForm.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = job.value;
  togglePopup(popupProfile);
});
*/
/*
cardForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const newCard = new Card(inputTitle.value, inputUrl.value, "#card-template", {
    handleClickImage: () => {
      popupImage.open(inputUrl.value, inputTitle.value);
    },
  });
  elementsSection.prepend(newCard.generateCard());
  cardForm.reset();
  // togglePopup(popupAdd);
});
*/

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

const sectionCards = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const newCard = new Card(item.name, item.link, "#card-template", {
        handleClickImage: () => {
          popupImage.open(item.link, item.name);
        },
      });
      sectionCards.addItem(newCard.generateCard());
    },
  },
  ".elements"
);

sectionCards.renderItems();

//Iterar sobre las tarjetas
/*
initialCards.forEach((item) => {
  const newCard = new Card(item.name, item.link, "#card-template", {
    handleClickImage: () => {
      popupImage.open(item.link, item.name);
    },
  });
  elementsSection.append(newCard.generateCard());
});
*/

/* const overlays = document.querySelectorAll(".popup__overlay"); */

/* overlays.forEach((overlay) => {
  overlay.addEventListener("click", function (event) {
    const popup = overlay.closest(".popup");
    togglePopup(popup);
  });
}); */

Array.from(document.querySelectorAll(selectorsConfig.formSelector)).forEach(
  (formElement) => {
    const formValidator = new FormValidator(selectorsConfig, formElement);
    formValidator.enableValidation();
  }
);
