import Popup from '../components/Popup.js'


 export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.caption = this.popup.querySelector('.popup__figcaption');
    this.image = this.popup.querySelector('.popup__image');
  }

  open(data) {
    this.caption.textContent = data._card.name;
    this.image.src = data._card.link;
    this.image.alt = data._card.name;
    super.open();
  }
}
