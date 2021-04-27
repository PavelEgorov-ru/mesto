import {openPopup} from "./utilits.js";

export class Card {
  constructor (card) {
    this.card = card;
    this.cardElement = this.makeElement();
    this.likeElement = this.cardElement.querySelector('.cards__button-like');
    this.backet = this.cardElement.querySelector('.cards__delete-icon');
    this.makeEventListener()

    }
    //создание элемента
    makeElement() {
      const cardsTemplate = document.querySelector('.template-cards').content;
      const cardsTemplateClone = cardsTemplate.cloneNode(true);
      const cardElement = cardsTemplateClone.querySelector('.cards__element');
      this.cardElementName = cardElement.querySelector('.cards__text');
      this.cardElementImage = cardElement.querySelector('.cards__image');
      this.cardElementImage.src = this.card.link;
      this.cardElementImage.alt = this.card.name;
      this.cardElementName.textContent = this.card.name;
      return cardElement
    }

    //создание слушателей
    makeEventListener() {
      this.likeElement.addEventListener('click', () => this.like());
      this.backet.addEventListener('click', () => this.deleteCard())
      this.cardElementImage.addEventListener('click', () => this.preview())
    }

    // //удаление карточки
    deleteCard() {
      this.cardElement.remove();
    }

    // // переключение лайка
    like() {
      this.likeElement.classList.toggle('cards__button-like-active');
    }

    // //превью карточки
    preview() {
      const popupAddImage = document.querySelector('.popup_add-image');
      const popupImageLink = popupAddImage.querySelector('.popup__image');
      const popupImageCaption = popupAddImage.querySelector('.popup__figcaption');
      popupImageLink.src = this.card.link;
      popupImageCaption.textContent = this.card.name;
      openPopup(popupAddImage)
    };

     render() {
       return this.cardElement
     }
      
}






