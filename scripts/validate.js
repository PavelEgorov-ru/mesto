enableValidation({
  formSelector: '.popup__content',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',// засеривание кнопки
  inputErrorClass: 'popup__item_type_error',//подчеркивание поля ввода
  errorClass: 'popup__error_visible' // видимость ошибки
}); 

//находим все формы в массив
function enableValidation (config) {
  const forms = Array.from(document.querySelectorAll(config.formSelector));
  forms.forEach(form => {
    form.addEventListener('submit', preventSubmitForm);
    setInputListener(form, config);
  })
}

// отменяем отправку формы
function preventSubmitForm(e) {
  e.preventDefault();
}

// находим все поля ввода
function setInputListener(formElement, config) {
  const inputs = Array.from(formElement.querySelectorAll(config.inputSelector));
  const button = formElement.querySelector(config.submitButtonSelector);
  inputs.forEach(input =>{
    // слушатель на каждый интпут на каждый ввод
    input.addEventListener('input', e => {
      inputValidity(formElement, input, config);
      //определяет состояние кнопки
      toggleButtonState(button, config, inputs);
    })
  })
}

// снимаем или добавляем подчеркивание поля ввода при валидации
// текст об ошибке либо удаляется, либо появляется
function inputValidity (formElement, input, config) {
  if (input.validity.valid) {
    showInputError(formElement, input, config)
  } else {
    hideInputError(formElement, input, config)
  }
}
 
function showInputError(formElement, input, config) {
    const inputError = formElement.querySelector(`#${input.id}--error`);
    input.classList.remove(config.inputErrorClass);
    inputError.textContent = '';
    inputError.classList.remove(config.errorClass)
}

function hideInputError(formElement, input, config) {
  const inputError = formElement.querySelector(`#${input.id}--error`);
  input.classList.add(config.inputErrorClass);
  inputError.textContent = input.validationMessage;
  inputError.classList.add(config.errorClass);
}

// определяем состояние кнопки в зависимости от валидности инпутов
function toggleButtonState(button, config, inputs) {
  if (!hasInvalidInputs(inputs)) {
    button.classList.add(config.inactiveButtonClass);
    button.disabled = true;
  } else {
    button.classList.remove(config.inactiveButtonClass);
    button.disabled = false;
  }

}

//функция проверки валидности инпутов
function hasInvalidInputs(inputs) {
  return inputs.every(input => input.validity.valid)
}

const resetFormState = (popup, config) => {
  const inputList = Array.from(popup.querySelectorAll(config.inputSelector));
  inputList.forEach(inputElement => {
    showInputError(popup, inputElement, config);
  })
}