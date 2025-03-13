import Card from "./card.js";
import FormValideitor from "./formValidator.js" 

const initialCards = [
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

const popup = document.querySelector(".popup");
const inputName = document.querySelector("#input-name");
const inputHobbie = document.querySelector("#input-hobbie");
const inicioUsuario = document.querySelector(".profile__user");
const inicioDescripcion = document.querySelector(".profile__description");
const edicion = document.querySelector(".start");
const buttonClose = document.querySelector(".popup__close");
const buttonSave = document.querySelector(".popup__button");
const inicio = document.querySelector(".profile__edition");
const profilePost = document.querySelector(".profile__post");
const add = document.querySelector("#add");
const addTitle = document.querySelector("#add-title");
const addImage = document.querySelector("#add-image");
const addClose = document.querySelector("#add-close");
const addButton = document.querySelector("#add-button");
const cards = document.querySelector(".cards");
const imageBigTitle = document.querySelector(".popup-image__title");
const popupImageBig = document.querySelector(".popup-image__photo");
const popupClose = document.querySelector(".popup-image__close");
const editProfileForm = document.querySelector("#edit-profile-form");

/* addClose.forEach(dialog=>{})
addClose.addEventListener("click",()=>{ 
  console.log ("click")
  this.close}) */
const createCard = (data) => {
  return new Card(data, "#card_template").getTemplate();
  //es lo mismo que hacer c1=new card
};

const renderCard = (data, cards) => {
  cards.prepend(createCard(data));
};

initialCards.forEach((data) => {
  renderCard(data, cards);
});



/* const c1=new Card({
  name:"acapulco",
  link:"https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
},"#card_template")
console.log(c1.getTemplate())
cards.append(c1.getTemplate()); */

/* initialCards.forEach((data) => {
  const cardTemplate = document.querySelector("#card_template").content;
  const card = cardTemplate.querySelector(".card").cloneNode(true);

  const cardImage = card.querySelector(".card__image");
  cardImage.src = data.link;
  const postCorazon = card.querySelector(".card__button");

  cardImage.alt = data.name;
  postCorazon.addEventListener("click", function unclick() {
    postCorazon.classList.toggle("card__black");
  });

  const cardName = card.querySelector(".card__title");
  cardName.textContent = data.name;
  cards.append(card);

  const postTrash = card.querySelector(".card__trash");
  postTrash.addEventListener("click", function () {
    card.remove();
  });

  const imageBig = document.querySelector(".popup-image");
  cardImage.addEventListener("click", function () {
    imageBig.showModal();
    popupImageBig.src = data.link;
    imageBigTitle.textContent = data.name;
  });
  popupClose.addEventListener("click", function () {
    imageBig.close();
  })


}); */

console.log(edicion);
inicio.addEventListener("click", function unclick() {
  popup.showModal();
  inputName.value = inicioUsuario.textContent;
  inputHobbie.value = inicioDescripcion.textContent;
});

buttonClose.addEventListener("click", function unclick() {
  popup.close();
});

// evento para informacionn de perfil

buttonSave.addEventListener("click", function unclick(e) {
  e.preventDefault();
  inicioUsuario.textContent = inputName.value;
  inicioDescripcion.textContent = inputHobbie.value;
  popup.close();
});

profilePost.addEventListener("click", function unclick() {
  add.showModal();
});

addClose.addEventListener("click", function unclick() {
  add.close();
});

// popup de nueva cards

addButton.addEventListener("click", function createcard(e) {
  e.preventDefault();

  const name = addTitle.value;
  const link = addImage.value;

  const cardTemplate = document.querySelector("#card_template").content;
  const card = cardTemplate.querySelector(".card").cloneNode(true);

  const cardImage = card.querySelector(".card__image");
  cardImage.src = link;
  const postCorazon = card.querySelector(".card__button");

  cardImage.alt = name;
  postCorazon.addEventListener("click", function unclick() {
    postCorazon.classList.toggle("card__black");
  });

  const cardName = card.querySelector(".card__title");
  cardName.textContent = name;
  cards.prepend(card);

  const postTrash = card.querySelector(".card__trash");
  postTrash.addEventListener("click", function () {
    card.remove();
  });
  add.close();

  const imageBig = document.querySelector(".popup-image");
  cardImage.addEventListener("click", function () {
    imageBig.showModal();
    popupImageBig.src = link;
    imageBigTitle.textContent = name;
  });
});

 
const enableValidation={
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const profileFormValideitor=new FormValideitor(enableValidation,editProfileForm)
profileFormValideitor.enableValidation()

const addCardValidator=new FormValideitor(enableValidation,add)
addCardValidator.enableValidation()


//enventos con validacion de formularios

/* 
const formulario= document.querySelector(".popup__form")

inputName.addEventListener("blur", validar);
inputHobbie.addEventListener("blur", validar);
addTitle.addEventListener("blur", validar);
addImage.addEventListener("blur", validar);

function validar(evt) {
  console.log(evt.target.validationMessage);

  if (evt.target.value.trim() === "") {
    mostrarAlerta(evt.target.validationMessage);
  } else {
    console.log("si hay algo")
  }

  console.log(evt.target.id)
}

function mostrarAlerta(mensaje, referencia) {
  //generar una alerta 
  const error= document.createElement("p"); // no va 
  error.textContent = mensaje;

 //inyectar el error al formulario 

 //referencia.appendChild(error) // no va 




}

 */
