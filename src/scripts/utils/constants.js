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
export const avatarEditBtn = document.querySelector('.profile__avatar-btn')


// форма 
export const cardForm = document.querySelector('.popup__content_card');
export const profileForm = document.querySelector('.popup__content_profile');
export const avatarForm = document.querySelector('.popup__content_avatar');

export const popupNameInput = document.querySelector('.popup__item_el_name');
export const popupCommitInput = document.querySelector('.popup__item_el_comment')




