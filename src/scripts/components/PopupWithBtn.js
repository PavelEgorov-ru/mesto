import Popup from '../components/Popup.js'

export default class PopupWithBtn extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this.submitHandler = submitHandler;
    this.form = this.popup.querySelector('.popup__content');
  }

  setEventListeners() {
    super.setEventListeners();
    this.form.addEventListener('submit', (event) => {
      event.preventDefault()
      this.submitHandler(this.data)
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