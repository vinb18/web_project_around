export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(this._popupSelector);
    this._popupCloseButton = this._popupElement.querySelector(".button_close");
    this._handleEscClose = this._handleEscClose.bind(this);
    this._popupCloseOverlay =
      this._popupElement.querySelector(".popup__overlay");
    this.setEventListeners();
  }

  open() {
    this._popupElement.classList.contains("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popupCloseButton.addEventListener("click", function () {
      this.close();
    });
    this._overlay.addEventListener("click", function () {
      this.close();
    });
  }
}
