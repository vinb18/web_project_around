export const popupImage = document.querySelector(".popup_image");

export function removeCard(cardElement) {
  cardElement.remove();
}

export function showPopup(popupImage, linkUrl, placeName) {
  popupImage.classList.toggle("popup__opened");
  popupImage.querySelector("img").src = linkUrl;
  popupImage.querySelector(".popup__title").textContent = placeName;
  popupImage.querySelector("img").setAttribute("alt", placeName);
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
