const popup = document.querySelector(".popup");
const inputName = document.querySelector("#input-name");
const inputHobbie = document.querySelector("#input-hobbie");
const inicioUsuario = document.querySelector(".start__user");
const inicioDescripcion = document.querySelector(".start__description");
const edicion = document.querySelector(".profile");
const buttonClose = document.querySelector(".popup__close");
const buttonSave = document.querySelector(".popup__button");
const inicio = document.querySelector(".start__edition");


console.log(edicion);
inicio.addEventListener("click", function unclick() {
  popup.showModal();
  inputName.value = inicioUsuario.textContent;
  inputHobbie.value = inicioDescripcion.textContent;
});

buttonClose.addEventListener("click", function unclick() {
  popup.close();
});

buttonSave.addEventListener("click", function unclick(e) {
  e.preventDefault();
  inicioUsuario.textContent = inputName.value;
  inicioDescripcion.textContent = inputHobbie.value;
    popup.close();

});
