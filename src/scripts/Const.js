export const buttonEdit = document.querySelector(".button_edit");
export const profileName = document.querySelector(".profile__name");
export const profileJob = document.querySelector(".profile__job");
export const profileForm = document.forms.edit;
export const inputName = profileForm.elements.name;
export const job = profileForm.elements.job;
export const buttonAdd = document.querySelector(".button_add");
export const elementsSection = document.querySelector(".elements");
export const popupProfileSelector = ".popup_profile";
export const popupAddSelector = ".popup_add";
export const popupImageSelector = ".popup_image";

import Arizona from "../images/Arizona.jpg";
import Gatlinburg from "../images/Gatlinburg.jpg";
import Oregon from "../images/Oregon.jpg";
import Washington from "../images/Washington.jpg";
import Yellowstone from "../images/Yellowstone.jpg";
import Zion from "../images/Zion.jpg";

export const initialCards = [
  {
    name: "Arizona",
    link: Arizona,
  },
  {
    name: "Gatlinburg",
    link: Gatlinburg,
  },
  {
    name: "Oregon",
    link: Oregon,
  },
  {
    name: "Washington",
    link: Washington,
  },
  {
    name: "Yellowstone",
    link: Yellowstone,
  },
  {
    name: "Parque Nacional Zion",
    link: Zion,
  },
];
