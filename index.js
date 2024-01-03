const buttonEdit = document.querySelector(".button_edit");
const popupProfile = document.querySelector(".popup");
const buttonClose = document.querySelector(".button_close");
const buttonLike = document.querySelector("button_like");

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const profileForm = document.forms.edit;
const inputName = profileForm.elements.name;
/* const inputName = document.querySelector(".popup__item_name") */
/* const inputJob = document.querySelector(".popup__item_job") */
const job = profileForm.elements.job;
const elements = document.querySelector(".elements");

const buttonAdd = document.querySelector(".button_add");
const popupAdd = document.querySelector(".popup_add");
const buttonCloseAdd = popupAdd.querySelector(".button_close");
const buttonSaveAdd = popupAdd.querySelector(".button_save");
const inputTitle = document.querySelector(".popup__item_title");
const inputUrl = document.querySelector(".popup__item_url");
const cardForm = document.forms.add;
const popupImage = document.querySelector(".popup_image");
const buttonCloseImage = popupImage.querySelector(".button_close");
const buttonSave = document.querySelector(".button_save");
const formItem = profileForm.querySelector(".popup__item");

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

function togglePopup(popup) {
  popup.classList.toggle("popup__opened");
}

function toggleLike(button_like) {
  button_like.classList.toggle("button_like-black");
}

buttonEdit.addEventListener("click", function () {
  inputName.value = profileName.textContent;
  job.value = profileJob.textContent;
  togglePopup(popupProfile);
});

buttonAdd.addEventListener("click", function () {
  togglePopup(popupAdd);
});

buttonCloseAdd.addEventListener("click", function () {
  togglePopup(popupAdd);
});

buttonClose.addEventListener("click", function () {
  togglePopup(popupProfile);
});

buttonCloseImage.addEventListener("click", function () {
  togglePopup(popupImage);
});

//Llamae a la función que desactiva el botón
function setSubmitButtonState(isFormValid) {
  if (isFormValid) {
    buttonSave.removeAttribute("disabled");
    buttonSave.classList.remove("button_save_disabled");
  } else {
    buttonSave.setAttribute("disabled", true);
    buttonSave.classList.add("button_save_disabled");
  }
}

profileForm.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = job.value;
  togglePopup(popupProfile);
  setSubmitButtonState(false);
});

profileForm.addEventListener("input", function (event) {
  event.preventDefault();
  const isValid = inputName.value.length > 1 && job.value.length > 1;
  setSubmitButtonState(isValid);
});

function setSubmitButtonStateAdd(isFormValid) {
  if (isFormValid) {
    buttonSaveAdd.removeAttribute("disabled");
    buttonSaveAdd.classList.remove("button_save_disabled");
  } else {
    buttonSaveAdd.setAttribute("disabled", true);
    buttonSaveAdd.classList.add("button_save_disabled");
  }
}

function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

cardForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const newCard = createCard(inputTitle.value, inputUrl.value);
  elementsSection.prepend(newCard);
  cardForm.reset();
  togglePopup(popupAdd);
  setSubmitButtonStateAdd(false);
});

cardForm.addEventListener("input", function (event) {
  event.preventDefault();
  const isValid = inputTitle.value.length > 1 && isValidUrl(inputUrl.value);
  setSubmitButtonStateAdd(isValid);
});

//Array
const initialCards = [
  {
    name: "Arizona",
    link: "./images/Arizona.jpg",
  },
  {
    name: "Gatlinburg",
    link: "./images/Gatlinburg.jpg",
  },
  {
    name: "Oregon",
    link: "./images/Oregon.jpg",
  },
  {
    name: "Washington",
    link: "./images/Washington.jpg",
  },
  {
    name: "Yellowstone",
    link: "./images/Yellowstone.jpg",
  },
  {
    name: "Parque Nacional Zion",
    link: "./images/Zion.jpg",
  },
];

//Contenedor donde se insertan las tarjetas
const elementsSection = document.querySelector(".elements");

//Iterar sobre las tarjetas
initialCards.forEach((item) => {
  const newCard = createCard(item.name, item.link);
  elementsSection.append(newCard);
});

//Configurar valores de la tarjeta
function createCard(placeName, link) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  cardElement.querySelector(".element__title").textContent = placeName;
  const cardImage = cardElement.querySelector(".element__image");
  cardImage.src = link;
  cardImage.setAttribute("alt", placeName);
  const deleteButton = cardElement.querySelector(".button_delete");
  const clickImage = cardElement.querySelector(".element__image");
  const likeButton = cardElement.querySelector(".button_like");

  deleteButton.addEventListener("click", function () {
    removeCard(cardElement);
  });

  clickImage.addEventListener("click", function () {
    showPopup(popupImage, link, placeName);
  });

  likeButton.addEventListener("click", function () {
    toggleLike(likeButton);
  });
  return cardElement;
}

function showPopup(popupImageElement, linkUrl, placeName) {
  popupImageElement.classList.toggle("popup__opened");
  popupImageElement.querySelector("img").src = linkUrl;
  popupImageElement.querySelector(".popup__title").textContent = placeName;
}

function removeCard(cardElement) {
  cardElement.remove();
}

console.log(document.forms.add);
console.log(document.forms.edit);
