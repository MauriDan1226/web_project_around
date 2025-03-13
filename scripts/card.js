class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    console.log(data);
  }

  //esto clona una card como una funcion privada, 
_pruebaPrivada(){
    const cardTemplate = document.querySelector(this._cardSelector).content;
    const card = cardTemplate.querySelector(".card").cloneNode(true);
    return card
}

  getTemplate() {
    
    const cardClonada=this._pruebaPrivada();
    const cardTitle = cardClonada.querySelector(".card__title");
    cardTitle.textContent = this._name;
    const addImage = cardClonada.querySelector("#add-image");
    const cardImage = cardClonada.querySelector(".card__image");
    cardImage.src = this._link;
    //eliminar imagenes
    const postTrash = cardClonada.querySelector(".card__trash");

    postTrash.addEventListener("click", () => {
      console.log("hola");
      cardClonada.remove();
    });

    //like a imagenes
    const heartButton = cardClonada.querySelector(".card__image");
    const postCorazon= cardClonada.querySelector(".card__button")
    postCorazon.addEventListener("click", () => {
      postCorazon.classList.toggle("card__black");
      console.log("holaaa");
    });

    return cardClonada;
  }
}

export default Card;
