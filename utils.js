export function removeCard(cardElement) {
  cardElement.remove();
}

export function showPopup(popupImage, src, name) {
  popupImage.classList.toggle("popup__opened");
  popupImage.querySelector("img").src = src;
  popupImage.querySelector(".popup__title").textContent = name;
  popupImage.querySelector("img").setAttribute("alt", name);
}

export function toggleLike(button_like) {
  button_like.classList.toggle("button_like-black");
}

export const selectorsConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__item",
  submitButtonSelector: ".button_save",
  inactiveButtonClass: "button_save_disabled",
  inputErrorClass: "popup__item-invalid",
  errorClass: "popup__item-error_active",
};

export const popupImage = document.querySelector(".popup_image");
