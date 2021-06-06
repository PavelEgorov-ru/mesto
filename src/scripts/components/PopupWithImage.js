import Popup from '../components/Popup.js'


 export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._caption = this._popup.querySelector('.popup__figcaption');
    this._image = this._popup.querySelector('.popup__image');
  }

  open(data) {
    this._caption.textContent = data._card.name;
    this._image.src = data._card.link;
    this._image.alt = data._card.name;
    super.open();
  }
}
