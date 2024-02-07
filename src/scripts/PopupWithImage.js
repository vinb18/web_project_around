import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popupElement.querySelector(".popup__image");
    this._popupTitle = this._popupElement.querySelector(".popup__title");
  }

  open(linkUrl, placeName) {
    this._popupImage.src = linkUrl;
    this._popupImage.alt = placeName;
    this._popupTitle.textContent = placeName;
    super.open();
  }
}
