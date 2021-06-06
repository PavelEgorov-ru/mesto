import Popup from '../components/Popup.js'


export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._form = this._popup.querySelector('.popup__content');
    this._popupBtn = this._popup.querySelector('.popup__button');
    this._inputs = Array.from(this._form.querySelectorAll('.popup__item'));
  }

  _getInputValues() {
    const values = {};    
    this._inputs.forEach(input => {
      values[input.name] = input.value
    })
    return values
  }


  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', () => {
      this._submitHandler(this._getInputValues())
    });
  }

  close() {
    super.close();
    this._form.reset();
  }

  saveBtn(status) {
    if(status) {
      this._popupBtn.textContent = 'Сохранение...'
    } else {
      this._popupBtn.textContent = 'Сохранить'
    }
  }
}