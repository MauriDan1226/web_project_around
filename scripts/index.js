import Api, { api } from "./Api.js";
import Card from "./card.js";
import FormValideitor from "./formValidator.js";
import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
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
const imageBigTitle = document.querySelector(".popup__title");
const popupImageBig = document.querySelector(".popup__photo");
const popupClose = document.querySelector(".popup__close");
const editProfileForm = document.querySelector("#edit-profile-form");

const createCard = (data) => {
  return new Card(
    data,
    "#card_template",
    (cardId, cardClonada) => {
      api.deleteCard(cardId).then(() => {
        cardClonada.removeCard();
      });
    },
    (cardId, cardClonada, isLiked) => {
      if (isLiked) {
        api.removeLike(cardId).then(() => {
          cardClonada.likeCard();
        });
      } else {
        api.addLike(cardId).then(() => {
          cardClonada.likeCard();
        });
      }
    }
  ).getTemplate();
  //es lo mismo que hacer c1=new card
};

/*const renderCard = (data, cards) => {
  cards.prepend(createCard(data));
};*/

const loadInitialCards = async () => {
  try {
    const initialCards = await api.getInitialCards(); //inifinitamente
    console.log(initialCards);

    const cardlist = new Section(
      {
        items: initialCards,
        renderer: (data) => {
          const cardElement = createCard(data);
          console.log(cardElement);
          cardlist.addItem(cardElement);
        },
      },
      ".gallery"
    );

    cardlist.render();
  } catch (err) {}
};

loadInitialCards();

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

addButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const name = addTitle.value;
  const link = addImage.value;

  const data = { name, link };

  try {
    const newCard = await api.createCard(data); //ES CUANDO LA CREA EN EL servidor
    renderCard(newCard, cards);
  } catch (err) {}
});

const enableValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const profileFormValideitor = new FormValideitor(
  enableValidation,
  editProfileForm
);
profileFormValideitor.enableValidation();

const addCardValidator = new FormValideitor(enableValidation, add);
addCardValidator.enableValidation();
