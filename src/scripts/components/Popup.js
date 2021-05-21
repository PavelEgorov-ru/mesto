export default class Popup {
  constructor(popupSelector) {
    this.popupSelector = popupSelector;
    this.popup = document.querySelector(this.popupSelector);
    this.overlay = this.popup.querySelector('.popup__overlay')
    this._handleEscClose = this._handleEscClose.bind(this)
    this._handleOvlClose = this._handleOvlClose.bind(this)
    this.close = this.close.bind(this)
  }

  open() {
    this.popup.classList.add('popup_visible');
    document.addEventListener('keyup', this._handleEscClose)
    
    
    
  }

  close() {
    this.popup.classList.remove('popup_visible');
    document.removeEventListener('keyup', this._handleEscClose)
    
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
    this.popup.querySelector('.popup__close-icon').addEventListener('click', this.close)      
    this.overlay.addEventListener('click', this._handleOvlClose)
    
  }
}