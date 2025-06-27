import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this.popupElement.querySelector(".popup__photo"); //p
    this._popupTitle = this.popupElement.querySelector(".popup__title");
  }
  open(name, link) {
    super.openPopup();
    this._popupImage.src = link;
    this._popupTitle.textContent = name;
  }

  closePopup() {
    super.closePopup();
    console.log(
      "AQUI EL SUPER SERIA ALIGATORIO POR QUE LE AGREGUE ESTE CONSOLE LOG"
    );
  }
}
