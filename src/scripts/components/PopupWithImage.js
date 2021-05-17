import Popup from '../components/Popup.js'


 export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
  }

  open(data) {
    
    this.caption = this.popup.querySelector('.popup__figcaption');
    this.image = this.popup.querySelector('.popup__image');
    this.caption.textContent = data.name;
    this.image.src = data.link;
    this.image.alt = data.name;
    super.open();
  }
}