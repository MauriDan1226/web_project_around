class Card {
  constructor(data, cardSelector, handlerDelete, handelLike, hadelImage) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._cardSelector = cardSelector;
    this._handlerDelete = handlerDelete;
    this._handelLike = handelLike;
    this._isLiked = data.isLiked;
    this._hadelImage = hadelImage;
  }

  //esto clona una card como una funcion privada,
  _pruebaPrivada() {
    this._cardTemplate = document.querySelector(this._cardSelector).content;
    this._card = this._cardTemplate.querySelector(".card").cloneNode(true);
    return this._card;
  }
  removeCard() {
    this._cardClonada.remove();
  }

  likeCard() {
    this._postCorazon.classList.toggle("card__black");
  }

  getTemplate() {
    this._cardClonada = this._pruebaPrivada();

    this._cardTitle = this._cardClonada.querySelector(".card__title");
    this._addImage = this._cardClonada.querySelector("#add-image");
    this._cardImage = this._cardClonada.querySelector(".card__image");
    //eliminar imagenes
    this._postTrash = this._cardClonada.querySelector(".card__trash");
    this._postCorazon = this._cardClonada.querySelector(".card__button");
    this._imageBig = document.querySelector("#popup-image");
    this._popupImageBig = this._imageBig.querySelector(".popup__photo");
    this._imageBigTitle = document.querySelector(".popup__title");

    this._cardTitle.textContent = this._name;
    this._cardImage.src = this._link;

    this._postTrash.addEventListener("click", () => {
      this._handlerDelete(this._id, this);
    });

    //like a imagenes

    if (this._isLiked) {
      this._postCorazon.classList.add("card__black");
    } else {
      this._postCorazon.classList.remove("card__black");
    }

    this._postCorazon.addEventListener("click", () => {
      this._handelLike(this._id, this, this._isLiked);
    });

    //abrir popup de la imagen
    this._cardImage.addEventListener("click", () => {
      this._hadelImage(this._name, this._link);
    });

    this._popupClose = this._imageBig.querySelector(".popup__close");
    this._popupClose.addEventListener("click", () => {
      this._imageBig.close();
    });

    return this._cardClonada;
  }
}

export default Card;
