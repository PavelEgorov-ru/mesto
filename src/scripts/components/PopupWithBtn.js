import Popup from '../components/Popup.js'

export default class PopupWithBtn extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this.form = this.popup.querySelector('.popup__content');
    this.popupBtn = this.popup.querySelector('.popup__button');
  }

  setEventListeners() {
    super.setEventListeners();
    this.form.addEventListener('submit', (event) => {
      event.preventDefault()
      this._submitHandler(this.data)
    });
  }

  setData(data) {
    this.data = data
  }

  saveBtn(status) {
    if(status) {
      this.popupBtn.textContent = 'Удаляется...'
    } else {
      this.popupBtn.textContent = 'Да'
    }
  }
}