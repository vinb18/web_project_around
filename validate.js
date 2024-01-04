const enableValidation = ({
  formSelector,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass,
}) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  console.log(formList);
  formList.forEach((formElement) => {
    console.log(formElement);
    formElement.addEventListener("submit", function (event) {
      event.preventDefault();
    });

    const inputElements = formElement.querySelectorAll(inputSelector);
    console.log(inputElements);

    const inputList = Array.from(inputElements);
    console.log(inputList);
    const buttonElement = formElement.querySelector(submitButtonSelector);

    toggleButtonState(inputList, buttonElement, inactiveButtonClass);

    inputList.forEach((inputElement) => {
      console.log(inputElement);
      inputElement.addEventListener("input", function () {
        checkInputValidity(
          formElement,
          inputElement,
          inputErrorClass,
          errorClass
        );
        toggleButtonState(inputList, buttonElement, inactiveButtonClass);
      });
    });
  });
};

const checkInputValidity = (
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

const showInputError = (
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

const hideInputError = (
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

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  console.log(inputList);

  if (Array.isArray(inputList) && hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.disabled = true;
  } else if (buttonElement) {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.disabled = false;
  } else return;
};

function hasInvalidInput(inputList) {
  console.log(inputList);
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__item",
  submitButtonSelector: ".button_save",
  inactiveButtonClass: "button_save_disabled",
  inputErrorClass: "popup__item-invalid",
  errorClass: "popup__item-error_active",
});
