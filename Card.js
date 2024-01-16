import { removeCard, popupImage, showPopup, toggleLike } from "./utils.js";

export default class Card {
  constructor(name, src, templateSelector) {
    this.name = name;
    this.src = src;
    this.templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(this.templateSelector).content;
    const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
    cardElement.querySelector(".element__title").textContent = this.name;
    const cardImage = cardElement.querySelector(".element__image");
    cardImage.src = this.src;

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
      showPopup(this._popupImage, this._src, this._name);
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
