
import {openPopup} from "./Utilit.js";

// нашел их здесь, т.к сказали, что с индекса импортировать лучше ничего не надо.
const popupAddImage = document.querySelector('.popup_add-image');
const popupImageLink = document.querySelector('.popup__image');
const popupImageCaption = document.querySelector('.popup__figcaption');



export class Card {
  constructor (card, templateSelector) {
    this._card = card;
    this._templateSelector = templateSelector
    this._cardElement = this._makeElement();
    this._likeElement = this._cardElement.querySelector('.cards__button-like');
    this._backet = this._cardElement.querySelector('.cards__delete-icon');

    this._makeEventListener()

    }
    //создание элемента
    _makeElement() {
      const cardsTemplate = document.querySelector(this._templateSelector).content;
      const cardsTemplateClone = cardsTemplate.cloneNode(true);
      const cardElement = cardsTemplateClone.querySelector('.cards__element');
      this._cardElementName = cardElement.querySelector('.cards__text');
      this._cardElementImage = cardElement.querySelector('.cards__image');
      this._cardElementImage.src = this._card.link;
      this._cardElementImage.alt = this._card.name;
      this._cardElementName.textContent = this._card.name;
      return cardElement;
    }

    //создание слушателей
    _makeEventListener() {
      this._likeElement.addEventListener('click', () => this._like());
      this._backet.addEventListener('click', () => this._deleteCard())
      this._cardElementImage.addEventListener('click', () => this._preview())
    }

    // //удаление карточки
    _deleteCard() {
      this._cardElement.remove();
    }

    // // переключение лайка
    _like() {
      this._likeElement.classList.toggle('cards__button-like-active');
    }

    // //превью карточки
    _preview () {
      popupImageLink.src = this._card.link;
      popupImageCaption.textContent = this._card.name;
      openPopup(popupAddImage)
    };

     render() {
       return this._cardElement
     }
      
}







