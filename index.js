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

function togglePopup(popup){
    popup.classList.toggle("popup__opened");

    }

buttonEdit.addEventListener("click",function(){
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
    togglePopup(popupProfile);
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
  const cardTemplate = document.querySelector("#card-template").content.cloneNode(true);
  cardTemplate.querySelector(".element__title").textContent = name;
  cardTemplate.querySelector(".element__image").src = link;
  const likeButton = cardTemplate.querySelector('.button__like');
  likeButton.addEventListener('click', function(){

  });
  return cardTemplate;
}

