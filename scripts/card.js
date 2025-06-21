class Card {
  constructor(data, cardSelector, handlerDelete, handelLike, handeRemoveLike) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._cardSelector = cardSelector;
    this._handlerDelete = handlerDelete;
    console.log(this._handlerDelete);
    this._handelLike = handelLike;
    this._isLiked = data.isLiked;
    this._handeRemoveLike = handeRemoveLike;
  }

  //esto clona una card como una funcion privada,
  _pruebaPrivada() {
    this._cardTemplate = document.querySelector(this._cardSelector).content;
    this._card = cardTemplate.querySelector(".card").cloneNode(true);
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
    this._cardTitle = this._cardClonada.querySelector(".card__title");
    cardTitle.textContent = this._name;
    this._addImage = this._cardClonada.querySelector("#add-image");
    this._cardImage = this._cardClonada.querySelector(".card__image");
    cardImage.src = this._link;

    //eliminar imagenes
    this._postTrash = this._cardClonada.querySelector(".card__trash");

    postTrash.addEventListener("click", () => {
      console.log("hola");

      this._handlerDelete(this._id, this);
    });

    //like a imagenes

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

    this._imageBig = document.querySelector("#popup-image");
    this._popupImageBig = imageBig.querySelector(".popup__photo");
    this._imageBigTitle = document.querySelector(".popup__title");
    cardImage.addEventListener("click", () => {
      imageBig.showModal();
      popupImageBig.src = this._link;
      imageBigTitle.textContent = this._name;
    });

    this._popupClose = imageBig.querySelector(".popup__close");
    popupClose.addEventListener("click", () => {
      imageBig.close();
    });

    return this._cardClonada;
  }
}

export default Card;
