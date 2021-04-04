const popupProfile = document.querySelector('.popup_profile');
const popupEditBtn = document.querySelector('.profile__edit-button');
const popupCloseBtn = document.querySelector('.popup__close-icon-profile');
const form = document.querySelector('.popup__content');
const nameProfile = document.querySelector('.profile__title');
const jobProfile= document.querySelector('.profile__subtitle');
const nameInput = document.querySelector ('.popup__item_el_name');
const jobInput = document.querySelector ('.popup__item_el_comment');
const cardsContainer = document.querySelector('.cards');
// ощбщая фуекция открытия попапа
function openPopup (popup) {
  popup.classList.add('popup_visible');
}
// общая функция закрытия попапа
function closePopup (popup) {
  popup.classList.remove('popup_visible');
}
// функция отправки данных в профиль
function formSubmitHandler(evt){
  evt.preventDefault();
  nameProfile.textContent=nameInput.value;
  jobProfile.textContent=jobInput.value;
  closePopup(popupProfile);
}

// слушатель на открытие попапа профиля
popupEditBtn.addEventListener('click', function() {  
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(popupProfile);
});

// слушатель на закрытие попапа профиля
popupCloseBtn.addEventListener('click', function(){
  closePopup(popupProfile);
});
 //отправка формы профиля
form.addEventListener('submit', formSubmitHandler);

//ПЯТЫЙ ПРОЕКТ

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



const cardsTemplate = document.querySelector('.template-cards').content;
function createCard (cardData) {
 
  const cardsTemplateClone = cardsTemplate.cloneNode(true);
  cardsTemplateClone.querySelector('.cards__image').src = cardData.link;
  cardsTemplateClone.querySelector('.cards__text').textContent = cardData.name;
  return cardsTemplateClone;
}

function formSubmitCards(evt){
  evt.preventDefault();
  const popupItemElPlace = document.querySelector('.popup__item_el_place');
  console.log(popupItemElPlace);
 
  const popupItemElLink = document.querySelector('.popup__item_el_link');
  console.log(popupItemElLink);
  const cardElement = createCard({name: popupItemElPlace.value, link: popupItemElLink.value})

  cardsContainer.prepend(cardElement);
  closePopup(popupProfile);
}
initialCards.forEach( function(item) {
    const cardElement = createCard(item);
    cardsContainer.prepend(cardElement);
 })

ialCards.forEach(item => {
  const cards = document.querySelector('.cards');
  const cardsTemplate = document.querySelector('.template-cards').content;
  const cardsTemplateClone = cardsTemplate.cloneNode(true);
  const cardsImage = cardsTemplateClone.querySelector('.cards__image');
  const cardsTitle = cardsTemplateClone.querySelector('.cards__text');
  cardsImage.src = item.link;
  cardsTitle.textContent = item.name;
  cards.append(cardsTemplateClone);
});
const popupSaveBtn = document.querySelector('.profile__button-card');

popupSaveBtn.addEventListener('click', function(){
  openPopup(popupSaveCards);
  console.log('click');
});

const popupSaveCards = document.querySelector('.popup_cards');