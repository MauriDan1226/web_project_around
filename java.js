const popup=document.querySelector(".dialog")
popup.showModal();

const button=document.querySelector(".dialog__button")
button.addEventListener("click", function unclick(){
    console.log ("hola");
    console.log (button.textContent)
    console.log (popup.innerHTML)
    popup.classList.add("dialog2")
/*     popup.classList.remove("dialog")
 */})
