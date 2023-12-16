const buttonEdit = document.querySelector(".button_edit");
const popupProfile = document.querySelector(".popup");
const buttonClose = document.querySelector(".button_close");
const buttonLike = document.querySelector("button_like");

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const profileForm = document.querySelector(".popup__form");
const inputName = document.querySelector(".popup__item_name")
const inputJob = document.querySelector(".popup__item_job")
const elements = document.querySelector(".elements");

const buttonAdd = document.querySelector(".button_add");
const popupAdd = document.querySelector(".popup_add");
const buttonCloseAdd = popupAdd.querySelector(".button_close");
const inputTitle = document.querySelector(".popup__item_title");
const inputUrl = document.querySelector(".popup__item_url");
const cardForm = document.querySelector(".popup__form_add");
const popupImage = document.querySelector(".popup_image");


function togglePopup(popup){
    popup.classList.toggle("popup__opened");

    }

function toggleLike(button_like){
    button_like.classList.toggle("button_like-black");

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
  cardForm.reset();
  togglePopup(popupAdd);
});

const initialCards = [
  {
    name: "Arizona",
    link: "https://images.unsplash.com/photo-1692648545854-75939d9f9fc1?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Cañón de la providencia",
    link: "https://images.unsplash.com/photo-1550079776-91e7db5606d8?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Utah",
    link: "https://images.unsplash.com/photo-1589083067039-e4481dc1808d?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Bellingham",
    link: "https://images.unsplash.com/photo-1516690553959-71a414d6b9b6?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Parque Nacional Monte Rainer",
    link: "https://images.unsplash.com/photo-1692648545854-75939d9f9fc1?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Cataratas Butte",
    link: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

//Contenedor donde se insertan las tarjetas
const elementsSection = document.querySelector(".elements");

//Iterar sobre las tarjetas
initialCards.forEach((item)=>{

  const newCard= createCard(item.name, item.link);
   elementsSection.append(newCard);
})

const buttonCloseImage = popupImage.querySelector('.button_close')
  buttonCloseImage.addEventListener("click",function(){
    togglePopup(popupImage);
  });

//Configurar valores de la tarjeta
function createCard(name, link){
  const cardTemplate = document.querySelector("#card-template").content
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  cardElement.querySelector(".element__title").textContent = name;
  const cardImage = cardElement.querySelector(".element__image");
  cardImage.src = link;
  cardImage.setAttribute('alt', name);

  const deleteButton = cardElement.querySelector('.button_delete');
  deleteButton.addEventListener('click', function(){
    cardElement.remove();

  });

  const clickImage = cardElement.querySelector('.element__image');
  clickImage.addEventListener('click', function(){

    popupImage.classList.toggle("popup__opened");
    popupImage.querySelector('img').src = link;
    popupImage.querySelector('.popup__title').textContent = name;

  });

  const likeButton = cardElement.querySelector('.button_like');
  likeButton.addEventListener('click', function(){
    toggleLike(likeButton);

  });
  return cardElement;



}

