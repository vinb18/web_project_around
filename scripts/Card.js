import {
  removeCard,
  popupImage,
  showPopup,
  toggleLike,
  togglePopup,
} from "./utils.js";

export default class Card {
  constructor(placeName, linkUrl, templateSelector) {
    this.placeName = placeName;
    this.linkUrl = linkUrl;
    this.templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(this.templateSelector).content;
    const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
    cardElement.querySelector(".element__title").textContent = this.placeName;
    const cardImage = cardElement.querySelector(".element__image");
    cardImage.src = this.linkUrl;

    return cardElement;
  }

  _setEventListeners() {
    const deleteButton = this._cardElement.querySelector(".button_delete");
    const clickImage = this._cardElement.querySelector(".element__image");
    const likeButton = this._cardElement.querySelector(".button_like");

    deleteButton.addEventListener("click", () => {
      removeCard(this._cardElement);
    });

    clickImage.addEventListener("click", () => {
      showPopup(popupImage, this.linkUrl, this.placeName);
      togglePopup(popupImage);
    });

    likeButton.addEventListener("click", () => {
      toggleLike(likeButton);
    });
  }

  generateCard() {
    this._cardElement = this._getTemplate();
    this._setEventListeners();
    return this._cardElement;
  }
}
