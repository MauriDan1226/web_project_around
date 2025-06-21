/* 
export const popup = document.querySelector(".popup");
export const inputName = document.querySelector("#input-name");
export const inputHobbie = document.querySelector("#input-hobbie");
export const inicioUsuario = document.querySelector(".profile__user");
export  const inicioDescripcion = document.querySelector(".profile__description");
export const edicion = document.querySelector(".start");
export const buttonClose = document.querySelector(".popup__close");
export const buttonSave = document.querySelector(".popup__button");
export  const inicio = document.querySelector(".profile__edition");
export const profilePost = document.querySelector(".profile__post");
export const add = document.querySelector("#add");
export const addTitle = document.querySelector("#add-title");
export  const addImage = document.querySelector("#add-image");
export  const addClose = document.querySelector("#add-close");
export const addButton = document.querySelector("#add-button");
export const cards = document.querySelector(".cards");
export  const imageBigTitle = document.querySelector(".popup__title");
export const popupImageBig = document.querySelector(".popup__photo");
export const popupClose = document.querySelector(".popup__close");
export const editProfileForm = document.querySelector("#edit-profile-form");

export const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

export const validationsSettings = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "input_name-error",
};

export function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");
  document.addEventListener("keydown", closeOnEsc);
}

export function closePopup(popupElement) {
  popupElement.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeOnEsc);
}

export function closeOnEsc(evt) {
  if (evt.key === "Escape") {
    const openPopup = document.querySelector(".popup_opened");
    if (openPopup) {
      closePopup(openPopup);
    }
  }
} */
