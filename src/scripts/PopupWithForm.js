//Esta clase genera una nueva carta al llenar el formulario.

import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popupElement.querySelector("#popup-add-card");
    this._submitButton = this._form.querySelector(".form__submit");
  }

  _getInputValues() {
    this._inputList = this._form.querySelectorAll(".form__input");
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setEventListeners(submitHandler, clickHandler) {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      submitHandler(this._getInputValues());
      this.close();
      this._form.reset();
      this.clickHandler();
    });
  }

  open() {}
  close() {}
}
