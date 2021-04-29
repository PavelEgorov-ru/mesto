import {Card} from './Card.js'
import {openPopup, closePopup} from './Utilit.js'
import {config} from './Config.js'
import {FormValidator} from './FormValidator.js'

// попапы
const popupProfile = document.querySelector('.popup_profile');
const popupCards = document.querySelector('.popup_cards');
const popupAddImage = document.querySelector('.popup_add-image');

//массив попапов
const popupArray = Array.from(document.querySelectorAll('.popup'));

// профиль
const popupProfileEditName = document.querySelector('.profile__title');
const popupProfileEditText = document.querySelector('.profile__subtitle');

// кнопки открытия попапов 
const profileEditBtn = document.querySelector('.profile__edit-button');
const cardsEditBtn = document.querySelector('.profile__button-card');


// кнопки закрытия попапов
const popupProfileCloseBtn = popupProfile.querySelector('.popup__close-icon-profile');
const popupCardsCloseBtn = popupCards.querySelector('.popup__close-icon-cards');


// поля ввода попапа
const popupProfileInputName = popupProfile.querySelector('.popup__item_el_name');
const popupProfileInputText = popupProfile.querySelector('.popup__item_el_comment');
const popupCardsItemPlace = popupCards.querySelector('.popup__item_el_place');
const popupCardsItemLink = popupCards.querySelector('.popup__item_el_link');

// форма 
const cardForm = document.querySelector('.popup__content_card');
const profileForm = document.querySelector('.popup__content_profile');

const validator1 = new FormValidator(config)

// массив карточек 
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// функция отправки формы
function formSubmitHandler(evt){
  evt.preventDefault();
  popupProfileEditName.textContent = popupProfileInputName.value;
  popupProfileEditText.textContent = popupProfileInputText.value;
  closePopup(popupProfile);
};
// слушатели редактирования профиля
profileEditBtn.addEventListener('click', function() {
  popupProfileInputName.value = popupProfileEditName.textContent;
  popupProfileInputText.value = popupProfileEditText.textContent;
  openPopup(popupProfile);
  const validatorProfile = new FormValidator(config, popupProfile);
  validatorProfile.enableValidation();
});

//... закрытия попапа профиля
popupProfileCloseBtn.addEventListener('click', function() {
  closePopup(popupProfile);
});

// ...отправки формы профиля
profileForm.addEventListener('submit', formSubmitHandler);

// ... открытя формы карточки
cardsEditBtn.addEventListener('click', function() {
  openPopup(popupCards);
  const validatorProfile = new FormValidator(config, popupCards);
  validatorProfile.enableValidation();
  // const FormValidator = new FormValidator
  // FormValidator.enableValidation(config, popupCards)
  // const button = popupCards.querySelector(config.submitButtonSelector);
  // const inputs = Array.from(popupCards.querySelectorAll(config.inputSelector))
  // toggleButtonState(button, config, inputs);
});

// ... закрытия формы карточки
popupCardsCloseBtn.addEventListener('click', function() {
  closePopup(popupCards);
  cardForm.reset()
});

// переменная общей секции с карточками
const cardsContainer = document.querySelector('.cards');

// обходчик карточек при загрузке
initialCards.forEach( function(item) {  
  const cardElement = new Card(item)
  cardsContainer.append(cardElement.render());
});

// const popupImageLink = popupAddImage.querySelector('.popup__image');
// const popupImageCaption = popupAddImage.querySelector('.popup__figcaption');
const popupImageClose = popupAddImage.querySelector('.popup__close-icon-add');


// слушатель закрытия попапа с картинкой
popupImageClose.addEventListener('click', function() {
  closePopup(popupAddImage);
});

//функция отправки формы карточки
function formSubmitCards(evt){
  evt.preventDefault();
  const cardElement = new Card({name: popupCardsItemPlace.value , link: popupCardsItemLink.value})
  cardsContainer.prepend(cardElement.render());
  closePopup(popupCards);
  cardForm.reset();
};

//слушатель отправки формы карточки
cardForm.addEventListener('submit', formSubmitCards);

//обходчик по массивам, навешивает слушатели на оверлей
popupArray.forEach((popupNew) => {
  const overlay = popupNew.querySelector('.popup__overlay');
  overlay.addEventListener('click', function(e) {
    if(e.target === e.currentTarget) {
      closePopup(popupNew);
    } 
  })
});