const popup = document.querySelector(".popup");
popup.showModal();

const button = document.querySelector(".popup__button");
button.addEventListener("click", function unclick() {
  console.log("hola");
  console.log(button.textContent);
  console.log(popup.innerHTML);
  popup.classList.add("dialog2");
  popup.classList.remove("dialog");
});

const edicion = document.querySelector(".perfil");
popup.showModal();
console.log(edicion);
const inicio = document.querySelector(".edicion");
inicio.addEventListener("click", function unclick() {
  console.log("hola" )
});
