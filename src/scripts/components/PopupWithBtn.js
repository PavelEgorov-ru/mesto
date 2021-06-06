import Popup from '../components/Popup.js'

export default class PopupWithBtn extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._form = this._popup.querySelector('.popup__content');
    this._popupBtn = this._popup.querySelector('.popup__button');
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault()
      this._submitHandler(this.data)
    });
  }

  setData(data) {
    this.data = data
  }

  saveBtn(status) {
    if(status) {
      this._popupBtn.textContent = 'Удаляется...'
    } else {
      this._popupBtn.textContent = 'Да'
    }
  }
}