import Card from "./scripts/Card.js";
import FormValidator from "./scripts/FormValidator.js";
import { selectorsConfig } from "./scripts/utils.js";
import PopupWithImage from "./scripts/PopupWithImage.js";
import PopupWithForm from "./scripts/PopupWithForm.js";
import Section from "./scripts/section.js";
import UserInfo from "./scripts/UserInfo.js";
import "./pages/index.css";
import {
  buttonEdit,
  profileName,
  profileJob,
  inputName,
  job,
  buttonAdd,
  elementsSection,
  popupProfileSelector,
  popupAddSelector,
  popupImageSelector,
  initialCards,
} from "./scripts/Const.js";
import { api } from "./utils/Api.js";

const popupImage = new PopupWithImage(popupImageSelector);
const popupProfile = new PopupWithForm(popupProfileSelector, (inputValues) => {
  profileName.textContent = inputValues.name;
  profileJob.textContent = inputValues.job;
  popupProfile.close();
});

const popupAddButton = new PopupWithForm(popupAddSelector, (inputValues) => {
  api.addCard(inputValues.url, inputValues.title).then((card) => {});
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

buttonEdit.addEventListener("click", function () {
  const userData = userInfo.getUserInfo();
  inputName.value = userData.username;
  job.value = userData.job;
  popupProfile.open();
});

buttonAdd.addEventListener("click", () => {
  popupAddButton.open();
});

export const userInfo = new UserInfo({
  usernameSelector: ".profile__name",
  jobSelector: ".profile__job",
});

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
api.getCards().then((elements) => {
  sectionCards.setItems(elements);
  sectionCards.renderItems();
});

Array.from(document.querySelectorAll(selectorsConfig.formSelector)).forEach(
  (formElement) => {
    const formValidator = new FormValidator(selectorsConfig, formElement);
    formValidator.enableValidation();
  }
);
