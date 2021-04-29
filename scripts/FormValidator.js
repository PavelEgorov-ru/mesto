export class FormValidator {
  constructor(config, popup) {
    this.formSelector = config.formSelector;
    this.inputSelector = config.inputSelector;
    this.submitButtonSelector = config.submitButtonSelector;
    this.inactiveButtonClass = config.inactiveButtonClass;
    this.inputErrorClass = config.inputErrorClass;
    this.errorClass = config.errorClass
    this.popup = popup
  }

  // находим все формы в массив
  enableValidation() {
    // const forms = Array.from(document.querySelectorAll(this.formSelector));
    // forms.forEach(form => {
    //   this.form = form
    //   this.makeSubmitEvtListener();
    //   this.setInputListener()
    // })

    this.form = this.popup.querySelector(this.formSelector)
    this.makeSubmitEvtListener();
    this.setInputListener()
  }

  // навешиваем слушатели на запрет отправки формы
  makeSubmitEvtListener() {
    this.form.addEventListener('submit', this.preventSubmitForm)
  }

  // отменяем отправку формы
  preventSubmitForm() {
    e.preventDefault();
  }

  // находим все поля ввода
  setInputListener() {
    this.inputs = Array.from(this.form.querySelectorAll(this.inputSelector));
    // this.input = this.form.querySelector(this.inputSelector)
    this.button = this.form.querySelector(this.submitButtonSelector);
    // this.makeInputEvtListener()
    this.inputs.forEach(input => {
       this.input = input;
       this.makeInputEvtListener()
       })
  
  }

  // навешиваем слушатель на каждый ввод в инпут
  makeInputEvtListener() {
    this.input.addEventListener('input', e => {
      this.inputValidity();
      //определяет состояние кнопки
      this.toggleButtonState();
    })
  }

  // Опеределяем удалять текст об ошибке и подчеркивание или нет
  inputValidity() {
    if (this.input.validity.valid) {
      this.showInputError()
    } else {
      this.hideInputError()
    }
  }

  // удаление текста об ошибке
  showInputError() {
    const inputError = this.form.querySelector(`#${this.input.id}--error`);
    this.input.classList.remove(this.inputErrorClass);
    inputError.textContent = '';
    inputError.classList.remove(this.errorClass)
  }

  // добавление текста об ошибке
  hideInputError() {
    const inputError = this.form.querySelector(`#${this.input.id}--error`);
    this.input.classList.add(this.inputErrorClass);
    inputError.textContent = this.input.validationMessage;
    inputError.classList.add(this.errorClass);
  }

  // определяем состояние кнопки в зависимости от валидности инпутов
  toggleButtonState() {
    if (!hasInvalidInputs(this.inputs)) {
      this.button.classList.add(this.inactiveButtonClass);
      this.button.disabled = true;
    } else {
      this.button.classList.remove(this.inactiveButtonClass);
      this.button.disabled = false;
    }
  }

  // проверяем валидность инпутов
  hasInvalidInputs() {
  return this.inputs.every(input => {input.validity.valid})
  }

  // сбрасываем ошибки инпутов при повторном открытии.
  resetFormState() {}
}