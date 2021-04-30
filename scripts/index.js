import {Card} from './Сard.js';
import {openPopup, closePopup} from './Utilit.js';
import {config} from './Config.js';
import {FormValidator} from './FormValidator.js';

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

// переменная общей секции с карточками
const cardsContainer = document.querySelector('.cards');

// переменная кнопки закрытия попапа
const popupImageClose = popupAddImage.querySelector('.popup__close-icon-add');



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



// функция отправки формы //
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
  validatorProfile.resetFormState();
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
  validatorCard.resetFormState()
});

// ... закрытия формы карточки
popupCardsCloseBtn.addEventListener('click', function() {
  closePopup(popupCards);
  cardForm.reset()
});


// обходчик карточек при загрузке
initialCards.forEach( function(item) {  
  const cardElement = new Card(item, '#template')
  cardsContainer.append(cardElement.render());
});

// слушатель закрытия попапа с картинкой
popupImageClose.addEventListener('click', function() {
  closePopup(popupAddImage);
});

//функция отправки формы карточки
function formSubmitCards(evt){
  evt.preventDefault();
  const cardElement = new Card({name: popupCardsItemPlace.value , link: popupCardsItemLink.value}, '#template')
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

// создание валидаторов для каждой формы
const validatorProfile = new FormValidator(config, popupProfile);
validatorProfile.enableValidation();

const validatorCard = new FormValidator(config, popupCards);
validatorCard.enableValidation();
