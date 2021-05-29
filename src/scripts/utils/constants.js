export const config = {
  formSelector: '.popup__content',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',// засеривание кнопки
  inputErrorClass: 'popup__item_type_error',//подчеркивание поля ввода
  errorClass: 'popup__error-visible' // видимость ошибки
};


// профиль
export const popupProfileEditName = document.querySelector('.profile__title');
export const popupProfileEditText = document.querySelector('.profile__subtitle');

// кнопки открытия попапов  
export const profileEditBtn = document.querySelector('.profile__edit-button'); 
export const cardsEditBtn = document.querySelector('.profile__button-card');


// форма 
export const cardForm = document.querySelector('.popup__content_card');
export const profileForm = document.querySelector('.popup__content_profile');

export const popupNameInput = document.querySelector('.popup__item_el_name');
export const popupCommitInput = document.querySelector('.popup__item_el_comment')

// массив карточек 
export const initialCards = [
  // {
  //   name: 'Архыз',
  //   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  // },
  // {
  //   name: 'Челябинская область',
  //   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  // },
  // {
  //   name: 'Иваново',
  //   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  // },
  // {
  //   name: 'Камчатка',
  //   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  // },
  // {
  //   name: 'Холмогорский район',
  //   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  // },
  // {
  //   name: 'Байкал',
  //   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  // }
];


