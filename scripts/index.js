// попапы
const popupProfile = document.querySelector('.popup_profile');
const popupCards = document.querySelector('.popup_cards');
const popupAddImage = document.querySelector('.popup_add-image');

// профиль
const popupProfileEditName = document.querySelector('.profile__title');
const popupProfileEditText = document.querySelector('.profile__subtitle');

// кнопки открытия попапов 
const profileEditBtn = document.querySelector('.profile__edit-button');
const cardsEditBtn = document.querySelector('.profile__button-card');


// кнопки закрытия попапов
const popupProfileCloseBtn = popupProfile.querySelector('.popup__close-icon-profile');
const popupCardsCloseBtn = popupCards.querySelector('.popup__close-icon-cards');

//кнопка удаления карточки
const popupCardsDeletCards = popupCards.querySelector('.cards__delete-icon');

// поля ввода попапа
const popupProfileInputName = popupProfile.querySelector('.popup__item_el_name');
const popupProfileInputText = popupProfile.querySelector('.popup__item_el_comment');
const popupCardsItemPlace = popupCards.querySelector('.popup__item_el_place');
const popupCardsItemLink = popupCards.querySelector('.popup__item_el_link');


// кнопки отправки форм
const popupProfileSave = popupProfile.querySelector('.popup__button_profile_save');
const popupCardsSave = popupCards.querySelector('.popup__button_cards_save');

// форма 
const cardForm = document.querySelector('.popup__content_card');
const profileForm = document.querySelector('.popup__content_profile');

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

// ощбщая фуекция открытия попапа
function openPopup (popup) {
  popup.classList.add('popup_visible');
};
// общая функция закрытия попапа
function closePopup (popup) {
  popup.classList.remove('popup_visible');
};
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
});

// ... закрытия формы карточки
popupCardsCloseBtn.addEventListener('click', function() {
  closePopup(popupCards);
});



// обходчик карточек при загрузке
initialCards.forEach( function(item) {
  const cardsContainer = document.querySelector('.cards');
  const cardElement = createCard(item);
  cardsContainer.append(cardElement);
});

const popupImageLink = popupAddImage.querySelector('.popup__image');
const popupImageCaption = popupAddImage.querySelector('.popup__figcaption');
const popupImageClose = popupAddImage.querySelector('.popup__close-icon-add');


// функция создания карточки
function createCard (item) {
  const cardsTemplate = document.querySelector('.template-cards').content;
  const cardsTemplateClone = cardsTemplate.cloneNode(true);
  const cardsElement = cardsTemplateClone.querySelector('.cards__element');
  const backet = cardsTemplateClone.querySelector('.cards__delete-icon');
  cardsElement.querySelector('.cards__image').src = item.link;
  cardsElement.querySelector('.cards__text').textContent = item.name;
 
 // кнопка удаления карточки 
      function deleteCard(){
        cardsElement.remove();
      };
 // функция открытия попапа с текущей карточкой
      function openPopupImg (e) {
        popupImageLink.src = item.link;
        popupImageCaption.textContent = item.name;
        openPopup(popupAddImage);
      };

  const likeElement = cardsElement.querySelector('.cards__button-like');
      function like () {
        likeElement.classList.toggle('cards__button-like-active');
      };

     likeElement.addEventListener('click', like);
 // слушатель открытия попапа по картинке
     cardsElement.querySelector('.cards__image').addEventListener('click', openPopupImg);
     
     
 // удадение карточки через корзину     
     backet.addEventListener('click', deleteCard);

   return cardsElement;
};

// слушатель закрытия попапа с картинкой
popupImageClose.addEventListener('click', function() {
  closePopup(popupAddImage);
});

//функция отправки формы карточки
function formSubmitCards(evt){
  evt.preventDefault();
  const cardsContainer = document.querySelector('.cards');
  const cardElement = createCard({name: popupCardsItemPlace.value , link: popupCardsItemLink.value})
  cardsContainer.prepend(cardElement);
  closePopup(popupCards);
  cardForm.reset();
};

//слушатель отправки формы карточки
cardForm.addEventListener('submit', formSubmitCards);


