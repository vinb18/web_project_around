const buttonEdit = document.querySelector(".button__edit");
const popupProfile = document.querySelector(".popup");
const buttonClose = document.querySelector(".button__close");
const buttonLike = document.querySelector("button__like");

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const profileForm = document.querySelector(".popup__form");
const inputName = document.querySelector(".popup__item_name")
const inputJob = document.querySelector(".popup__item_job")
const elements = document.querySelector(".elements");

const buttonAdd = document.querySelector(".button__add");
const popupAdd = document.querySelector(".popup_add");
const buttonCloseAdd = document.querySelector(".button__close_add");
const inputTitle = document.querySelector(".popup__item_title");
const inputUrl = document.querySelector(".popup__item_url");
const cardTitle = document.querySelector(".element__title");
const cardUrl = document.querySelector(".element__image");
const cardForm = document.querySelector(".popup__form_add");


function togglePopup(popup){
    popup.classList.toggle("popup__opened");

    }

function toggleLike(button__like){
    button__like.classList.toggle("button__like_black");

    }

buttonEdit.addEventListener("click",function(){
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
    togglePopup(popupProfile);
});

buttonAdd.addEventListener("click",function(){
    togglePopup(popupAdd);
});

buttonCloseAdd.addEventListener("click",function(){
  togglePopup(popupAdd);
});

buttonClose.addEventListener("click",function(){
    togglePopup(popupProfile);
});

profileForm.addEventListener("submit",function(event){
    event.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    togglePopup(popupProfile)
})

 cardForm.addEventListener("submit",function(event) {
  event.preventDefault();
  const newCard= createCard(inputTitle.value, inputUrl.value)
  elementsSection.prepend(newCard);
  popupAdd.classList.remove("popup__opened_add");
});

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
  }
];

//Contenedor donde se insertan las tarjetas
const elementsSection = document.querySelector(".elements");

//Iterar sobre las tarjetas
initialCards.forEach((item)=>{

  const newCard= createCard(item.name, item.link);
   elementsSection.append(newCard);
})

//Configurar valores de la tarjeta
function createCard(name, link){
  const cardTemplate = document.querySelector("#card-template").content
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  cardElement.querySelector(".element__title").textContent = name;
  cardElement.querySelector(".element__image").src = link;
  const deleteButton = cardElement.querySelector('.button__delete');
  deleteButton.addEventListener('click', function(){
    cardElement.remove();

  });
  const likeButton = cardElement.querySelector('.button__like');
  likeButton.addEventListener('click', function(){
    toggleLike(likeButton);

  });
  return cardElement;

}

