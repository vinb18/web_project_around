import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callback) {
    super(popupSelector);
    this._submitCallback = callback;
  }

  close() {
    const form = this._popupElement.querySelector("form");
    form.reset();
    super.close();
  }

  _getInputValues() {
    const inputValues = {};
    const form = this._popupElement.querySelector("form");
    Array.from(form.querySelectorAll("input")).forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  setEventListeners() {
    //submit y click
    super.setEventListeners();
    const form = this._popupElement.querySelector("form");
    form.addEventListener("submit", (event) => {
      this._submitCallback(this._getInputValues());
      this.close();
    });
  }
}
