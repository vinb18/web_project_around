import { removeCard, toggleLike } from "./utils.js";

export default class Card {
  constructor(
    placeName,
    linkUrl,
    templateSelector,
    {
      handleClickImage,
      handleLike,
      handleRemoveLike,
      handleDeleteCard,
      inputValues,
    }
  ) {
    this.placeName = placeName;
    this.linkUrl = linkUrl;
    this.templateSelector = templateSelector;
    this._handleClickImage = handleClickImage;
    this._handleLike = handleLike;
    this._handleRemoveLike = handleRemoveLike;
    this._handleDeleteCard = handleDeleteCard;
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

    clickImage.addEventListener("click", this._handleClickImage);

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
