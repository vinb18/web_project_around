// habilitar la validación llamando a enableValidation()
// pasar todas las configuraciones en la llamada

/* enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__item",
  submitButtonSelector: ".button_save",
  inactiveButtonClass: ".button_save_disabled",
  inputErrorClass: ".popup__item-invalid",
  errorClass: ".popup__item-error_active",
}); */

/* const formSelector = document.querySelector(".popup__form");
const inputSelector = formSelector.querySelector(".popup__item");
const formError = formSelector.querySelector(`.${inputSelector.id}-error`); */

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("popup__item-invalid");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__item-error_active");
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("popup__item-invalid");
  errorElement.classList.remove("popup__item-error_active");
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("button_save_disabled");
  } else {
    buttonElement.classList.remove("button_save_disabled");
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__item"));
  const buttonElement = formElement.querySelector(".button_save");
  console.log(formElement);
  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement);
    });
  });

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (event) {
      event.preventDefault();
    });

    /*  const fieldsetList = Array.from(
      formElement.querySelectorAll(".popup__set")
    );
    fieldsetList.forEach((fieldset) => {
      setEventListeners(fieldset);
    }); */

    setEventListeners(formElement);
  });
};

enableValidation();

/* formSelector.addEventListener("submit", function (event) {
  event.preventDefault();
});

inputSelector.addEventListener("input", function () {
  checkInputValidity(inputElement);
});
 */
