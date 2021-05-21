export default class Popup {
  constructor(popupSelector) {
    this.popupSelector = popupSelector;
    this.popup = document.querySelector(this.popupSelector);
    this.overlay = this.popup.querySelector('.popup__overlay')
    this.close = this.close.bind(this)
  }

  open() {
    this.popup.classList.add('popup_visible');
    document.addEventListener('keyup',(evt) => this._handleEscClose(evt))
    this.overlay.addEventListener('click', (evt) => this._handleOvlClose(evt))
    
    
  }

  close() {
    this.popup.classList.remove('popup_visible');
    document.removeEventListener('keyup',(evt) => this._handleEscClose(evt))
    this.overlay.removeEventListener('click', (evt) => this._handleOvlClose(evt))
  }

  _handleEscClose(evt) {
    evt.preventDefault();
    if(evt.key === 'Escape') {
      this.close()
    }
  }

  _handleOvlClose(evt) {
    if(evt.target === evt.currentTarget) {
      this.close()
    }
  }

  setEventListeners() {
    this.popup.querySelector('.popup__close-icon').addEventListener('click', () => {
      this.close()
    })
    
  }
}