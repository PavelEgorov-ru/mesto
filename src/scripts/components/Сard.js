export default class Card {
  constructor (card, templateSelector, handleCardClick, handleCardDelet, userId, handleLike) {
    this._card = card;
    this._userID = userId
    this._handleLike = handleLike
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardDelet = handleCardDelet
    this._cardElement = this._makeElement();
    this._makeEventListener()
    }
    //создание элемента
    _makeElement() {
      const cardsTemplate = document.querySelector(this._templateSelector).content;
      const cardsTemplateClone = cardsTemplate.cloneNode(true);
      const cardElement = cardsTemplateClone.querySelector('.cards__element');
      this._numberLikeElement = cardElement.querySelector('.cards__number-like')
      this._backet = cardElement.querySelector('.cards__delete-icon');
      this._likeElement = cardElement.querySelector('.cards__button-like');
      this._cardElementName = cardElement.querySelector('.cards__text');
      this._cardElementImage = cardElement.querySelector('.cards__image');
      this._cardElementImage.src = this._card.link;
      this._cardElementImage.alt = this._card.name;
      this._cardElementName.textContent = this._card.name;
      this._numberLikeElement.textContent = this._card.likes.length
      if (this._userID !== this._card.owner._id) {
        this._backet.classList.add('visibility')
      }
      this._isLiked = this._card.likes.some(like =>like._id === this._userID)
      if (this._isLiked) {
        this._likeElement.classList.add('cards__button-like-active')
      }
      return cardElement;
    }

    //создание слушателей
    _makeEventListener() {
      this._likeElement.addEventListener('click', () => this._like());
      this._backet.addEventListener('click', () => this._popupDelete(this));
      this._cardElementImage.addEventListener('click', () => this._preview());
    }

    // открытие попапа для удаления карточки 
    _popupDelete() {
      this._handleCardDelet(this)
    }

    //удаление карточки
    deleteCard() {
      this._cardElement.remove();
    }

    // // переключение лайка
    _like() {
      this._handleLike(this)
    }

    //превью карточки
    _preview () {
      this._handleCardClick(this);
    };

     render() {
       return this._cardElement
     }

     getId() {
       return this._card._id
     }
     
     getIsLiked() {
       return this._isLiked
     }

     updLikesInfo(likes) {
       this._card.likes = likes;
       this._isLiked = this._card.likes.some(like =>like._id === this._userID)
       if(this._isLiked) {
        this._likeElement.classList.add('cards__button-like-active')
        this._numberLikeElement.textContent = likes.length
       } else {
        this._likeElement.classList.remove('cards__button-like-active')
        this._numberLikeElement.textContent = likes.length
       }
     }
}







