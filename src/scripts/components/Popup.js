export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popup = document.querySelector(this._popupSelector);
    this._overlay = this._popup.querySelector('.popup__overlay')
    this._handleEscClose = this._handleEscClose.bind(this)
    this._handleOvlClose = this._handleOvlClose.bind(this)
    this.close = this.close.bind(this)
  }

  open() {
    this._popup.classList.add('popup_visible');
    document.addEventListener('keyup', this._handleEscClose)
    
    
    
  }

  close() {
    this._popup.classList.remove('popup_visible');
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
    this._popup.querySelector('.popup__close-icon').addEventListener('click', this.close)      
    this._overlay.addEventListener('click', this._handleOvlClose)
  }
}