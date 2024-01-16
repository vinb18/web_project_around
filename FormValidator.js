export default class FormValidator {
  constructor(selectorsConfig, formElement) {
    this.selectorsConfig = selectorsConfig;
    this.formElement = formElement;
  }

  _setEventListeners() {}

  _checkInputValidity = (
    formElement,
    inputElement,
    inputErrorClass,
    errorClass
  ) => {
    if (!inputElement.validity.valid) {
      showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage,
        inputErrorClass,
        errorClass
      );
    } else {
      hideInputError(formElement, inputElement, inputErrorClass, errorClass);
    }
  };

  _showInputError = (
    formElement,
    inputElement,
    errorMessage,
    inputErrorClass,
    errorClass
  ) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  };

  _hideInputError = (
    formElement,
    inputElement,
    inputErrorClass,
    errorClass
  ) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = "";
  };

  _toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    if (Array.isArray(inputList) && this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(inactiveButtonClass);
      buttonElement.disabled = true;
    } else if (buttonElement) {
      buttonElement.classList.remove(inactiveButtonClass);
      buttonElement.disabled = false;
    } else return;
  };

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  enableValidation() {
    this.formElement.addEventListener("submit", function (event) {
      event.preventDefault();
    });

    const inputElements = this.formElement.querySelectorAll(
      this.selectorsConfig.inputSelector
    );

    const inputList = Array.from(inputElements);

    const buttonElement = this.formElement.querySelector(
      this.selectorsConfig.submitButtonSelector
    );

    this._toggleButtonState(
      inputList,
      buttonElement,
      this.selectorsConfig.inactiveButtonClass
    );

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        this._checkInputValidity(
          formElement,
          inputElement,
          inputErrorClass,
          errorClass
        );
        this._toggleButtonState(
          inputList,
          buttonElement,
          this.selectorsConfig.inactiveButtonClass
        );
      });
    });
  }
}
