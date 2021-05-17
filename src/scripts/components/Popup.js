export default class Popup {
  constructor(popupSelector) {
    this.popupSelector = popupSelector;
    this.popup = document.querySelector(this.popupSelector)
    this.close = this.close.bind(this)
  }

  open() {
    this.popup.classList.add('popup_visible');
    document.addEventListener('keyup',(evt) => this._handleEscClose(evt))
    
    
  }

  close() {
    this.popup.classList.remove('popup_visible');
    document.removeEventListener('keyup',(evt) => this._handleEscClose(evt))
  }

  _handleEscClose(evt) {
    evt.preventDefault();
    if(evt.key === 'Escape') {
      this.close()
    }
  }

  setEventListeners() {
    this.popup.querySelector('.popup__close-icon').addEventListener('click', () => {
      this.close()
    })
    
  }
}