import Popup from '../components/Popup.js'


export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this.form = this.popup.querySelector('.popup__content');
    this.popupBtn = this.popup.querySelector('.popup__button');
    this._inputs = Array.from(this.form.querySelectorAll('.popup__item'));
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
    this.form.addEventListener('submit', () => {
      this._submitHandler(this._getInputValues())
    });
  }

  close() {
    super.close();
    this.form.reset();
  }

  saveBtn(status) {
    if(status) {
      this.popupBtn.textContent = 'Сохранение...'
    } else {
      this.popupBtn.textContent = 'Сохранить'
    }
  }
}