export default class FormValidator {
  constructor(config, form) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formElement = form;
  }

  // находим все формы в массив
  enableValidation() {
    this._makeSubmitEvtListener();
    this._setInputListener()
  }

  // навешиваем слушатели на запрет отправки формы
  _makeSubmitEvtListener() {
    this._formElement.addEventListener('submit', this._preventSubmitForm)
  }

  // отменяем отправку формы
  _preventSubmitForm(e) {
    e.preventDefault();
  }

  // находим все поля ввода
  _setInputListener() {
    this._inputs = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._button = this._formElement.querySelector(this._submitButtonSelector);
    this._inputs.forEach(input => {
       this._makeInputEvtListener(input)
       })
  }

  // навешиваем слушатель на каждый ввод в инпут
  _makeInputEvtListener(input) {
    input.addEventListener('input', e => {
      this._inputValidity(input);
      //определяет состояние кнопки
      this._toggleButtonState();
    })
  }

  // Опеределяем удалять текст об ошибке и подчеркивание или нет
  _inputValidity(input) {
    if (input.validity.valid) {
      this._hideInputError(input)
    } else {
      this._showInputError(input)
    }
  }

  // удаление текста об ошибке
  _hideInputError(input) {
    const inputError = this._formElement.querySelector(`#${input.id}--error`);
    input.classList.remove(this._inputErrorClass);
    inputError.textContent = '';
    inputError.classList.remove(this._errorClass)
  }

  // добавление текста об ошибке
  _showInputError(input) {
    const inputError = this._formElement.querySelector(`#${input.id}--error`);
    input.classList.add(this._inputErrorClass);
    inputError.textContent = input.validationMessage;
    inputError.classList.add(this._errorClass);
  }
  // сбрасываем ошибки инпутов при повторном открытии.
  // пришлось ее сделать и обратится к ней при открытии формы карточки и профиля для сброса предыдущих ошибок
  resetFormState() {
    this._inputs.forEach (inputElement => {
      this._hideInputError(inputElement)
    });
    this._toggleButtonState()
    

}

  // определяем состояние кнопки в зависимости от валидности инпутов
  _toggleButtonState() {
    if (!this._hasInvalidInputs()) {
      this._button.classList.add(this._inactiveButtonClass);
      this._button.disabled = true;
    } else {
      this._button.classList.remove(this._inactiveButtonClass);
      this._button.disabled = false;
    }
  }

  // проверяем валидность инпутов
  _hasInvalidInputs() {
    const result = this._inputs.every(input => input.validity.valid)
    return result
  }  
}
