// mostar alerta cuando los campos son invalidos en los dos forms.

// limpiar alerta cuando este correcta la informacion.

// habilitar el bonton enviar cuando la informacion este correacta.

//Muestra el mensaje de error



const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__error_visible");
  console.log("hola")
};

//Oculta el mensaje de erro
 const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__error_visible");
  errorElement.textContent = "";
};

//Revisa si el Input es válido
 const checkInputValidity = (formElement, inputElement) => {
  console.log("holaa")
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);

  } else {
    hideInputError(formElement, inputElement);
  }
};

//verifica si alguno de los campos es inválido
 const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

// Habilita o deshabilita el botón de submit
 const toggleButtonState = (inputList, buttonElement) => {
  console.log(hasInvalidInput(inputList));
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("form__button_disabled");
  } else {
    buttonElement.classList.remove("form__button_disabled");
  }
};

// Establece los eventos de validación para cada input
 const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));  
  const buttonElement = formElement.querySelector(".popup__button");

  // aquí, para comprobar el estado del botón al principio
  toggleButtonState(inputList, buttonElement);
  // Inicializar el estado del botón de submit
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      console.log("123")
      checkInputValidity(formElement, inputElement);
      // y aquí, para comprobarlo cada vez que haya cambios en la entrada de algún campo
      toggleButtonState(inputList, buttonElement);
    });
  });
};

// Activa la validación para todos los formularios
 const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    const inputList = Array.from(
      formElement.querySelectorAll(config.inputSelector)
    );
    const buttonElement = formElement.querySelector(
      config.submitButtonSelector
    );

    setEventListeners(formElement, inputList, buttonElement, config);
  });
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});