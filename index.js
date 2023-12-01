const buttonEdit = document.querySelector(".button__edit");
const popupProfile = document.querySelector(".popup");
const buttonClose = document.querySelector(".button__close");
const buttonLike = document.querySelector("button__like");

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const profileForm = document.querySelector(".popup__form");
const inputName = document.querySelector(".popup__item_name")
const inputJob = document.querySelector(".popup__item_job")

function togglePopup(popup){
    popup.classList.toggle("popup__opened");

    }

buttonEdit.addEventListener("click",function(){
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

