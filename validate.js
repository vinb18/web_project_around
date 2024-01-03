// habilitar la validación llamando a enableValidation()
// pasar todas las configuraciones en la llamada

/* enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__item",
  submitButtonSelector: ".button_save",
  inactiveButtonClass: "button_disabled",
  inputErrorClass: "popup__item-error",
  errorClass: "popup__item-error_active",
}); */

profileForm.addEventListener("input", function (event) {
  event.preventDefault();
  const isValid = inputName.value.length > 1 && job.value.length > 1;
  setSubmitButtonState(isValid);
});

cardForm.addEventListener("input", function (event) {
  event.preventDefault();
  const isValid = inputTitle.value.length > 1 && isValidUrl(inputUrl.value);
  setSubmitButtonStateAdd(isValid);
});

const showError = (input, errorMessage) => {
  const formError = profileForm.querySelector(`#${input.id}-error`);
  input.classList.add("popup__item-error");
  formError.textContent = errorMessage;
  formError.classList.add("popup__item-error_active");
};

const hideError = (input) => {
  const formError = profileForm.querySelector(`#${input.id}-error`);
  input.classList.remove("popup__item-error");
  formError.classList.remove("popup__item-error_active");
  formError.textContent = "";
};

const checkInputValidity = () => {
  if (!formItem.validity.valid) {
    showError(formItem, formItem.validationMessage);
  } else {
    hideError(formItem);
  }
};

function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}
