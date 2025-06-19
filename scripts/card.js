class Card {
  constructor(data, cardSelector, handlerDelete, handelLike, handeRemoveLike) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._cardSelector = cardSelector;
    this._handlerDelete = handlerDelete;
    console.log(this._handlerDelete);
    this._handelLike = handelLike;
    console.log(data, "Aprovechando");
    this._isLiked = data.isLiked;
    this._handeRemoveLike = handeRemoveLike;
  }

  //esto clona una card como una funcion privada,
  _pruebaPrivada() {
    const cardTemplate = document.querySelector(this._cardSelector).content;
    const card = cardTemplate.querySelector(".card").cloneNode(true);
    return card;
  }
  removeCard() {
    this._cardClonada.remove();
  }

  likeCard() {
    this._postCorazon.classList.toggle("card__black");
    console.log(this._postCorazon);
  }

  getTemplate() {
    this._cardClonada = this._pruebaPrivada();
    const cardTitle = this._cardClonada.querySelector(".card__title");
    cardTitle.textContent = this._name;
    const addImage = this._cardClonada.querySelector("#add-image");
    const cardImage = this._cardClonada.querySelector(".card__image");
    cardImage.src = this._link;
    //eliminar imagenes
    const postTrash = this._cardClonada.querySelector(".card__trash");

    postTrash.addEventListener("click", () => {
      console.log("hola");

      this._handlerDelete(this._id, this);

      /*      (cardId, cardClonada) => {
      api.deleteCard(cardId).then(() => {
        cardClonada.removeCard();
      });
    }
       */
    });

    //like a imagenes
    //heartButton = this._cardClonada.querySelector(".card__image");

    this._postCorazon = this._cardClonada.querySelector(".card__button");
    if (this._isLiked) {
      this._postCorazon.classList.add("card__black");
    } else {
      this._postCorazon.classList.remove("card__black");
    }

    this._postCorazon.addEventListener("click", () => {
      this._handelLike(this._id, this, this._isLiked);

      console.log("holaaa");
    });

    const imageBig = document.querySelector("#popup-image");
    const popupImageBig = imageBig.querySelector(".popup__photo");
    const imageBigTitle = document.querySelector(".popup__title");
    cardImage.addEventListener("click", () => {
      imageBig.showModal();
      popupImageBig.src = this._link;
      imageBigTitle.textContent = this._name;
    });

    const popupClose = imageBig.querySelector(".popup__close");
    popupClose.addEventListener("click", () => {
      imageBig.close();
    });

    return this._cardClonada;
  }
}

export default Card;
