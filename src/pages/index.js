import './../pages/index.css'
import Card from '../scripts/components/Сard.js';
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import Section from '../scripts/components/Section.js';
import UserInfo from '../scripts/components/UserInfo.js';
import Api from '../scripts/components/Api.js';
import PopupWithBtn from '../scripts/components/PopupWithBtn.js'
import {
  config,
  profileEditBtn,
  cardsEditBtn,
  avatarEditBtn,
  profileForm,
  cardForm,
  avatarForm, 
  popupNameInput,
  popupCommitInput
} from '../scripts/utils/constants.js';

// создаем класс API
const api = new Api({
  token: '17967209-61dd-4a29-b076-c48750c9d1ad',
  cohort: 'cohort-24'
});

let userId

Promise.all([api.newUserInfo(), api.getCards()])
.then(([userData, cardsData]) => {
  userId = userData._id
  setUserData(userData);
  sectionCard.renderer(cardsData, userId);
})

function setUserData (userData) {
   userInfo.setUserInfo(userData)
}

const sectionCard = new Section({
    rendererItem: (data) => {
      const card = creatCard(data, userId);
      sectionCard.addItem(card)
    }
}, '.cards');


// создание попапа превью
const popupImage = new PopupWithImage('.popup_add-image');
popupImage.setEventListeners();

// создание попапа добавления карточек
const popupForm = new PopupWithForm('.popup_cards', submitHandlerCard);
popupForm.setEventListeners();

// создание попапа редактирования профиля
const popupEditProfile = new PopupWithForm('.popup_profile', submitHandlerProfile);
popupEditProfile.setEventListeners();

// создание попапа редактирования аватара
const popupEditAvatar = new PopupWithForm('.popup_avatar', submitHandlerAvatar);
popupEditAvatar.setEventListeners();

// создание попапа удаления карточки
const popupDeletCard = new PopupWithBtn('.popup_delete-card', submitDeleteCard);
popupDeletCard.setEventListeners();

const userInfo = new UserInfo({name:'.profile__title', about: '.profile__subtitle', avatar: '.profile__avatar-image'});

// слушатель редактирования аватара
avatarEditBtn.addEventListener('click', () => {
  popupEditAvatar.open();
  validatorAvatar.resetFormState();
})

// слушатель редактирования карточки
cardsEditBtn.addEventListener('click', function() {
  popupForm.open();
  validatorCard.resetFormState();
});

// слушатель редактирования профиля
profileEditBtn.addEventListener('click', () => {
  editHadlerProfile();
  popupEditProfile.open();
  validatorProfile.resetFormState();
});

function handleCardDelet(data) {
  popupDeletCard.setData(data)
  return popupDeletCard.open();
}

function submitDeleteCard(data) {
  popupDeletCard.saveBtn(true)
  api.deleteCard(data._card._id)
  .then(() => {
    data._deleteCard()
    popupDeletCard.close()
  })
  .catch((error) => {
    console.log(error)
  })
  .finally(() => {
    popupDeletCard.saveBtn(false)
  })
}

function submitHandlerAvatar(value) {
  popupEditAvatar.saveBtn(true)
  api.editAvatar(value)
  .then(valueUpd => {
    userInfo.setUserInfo(valueUpd);
    popupEditAvatar.close()
  })
  .catch((error) => {
    console.log(error)
  })
  .finally(() => {
    popupEditAvatar.saveBtn(false)
  })
}

function submitHandlerCard(data) {
  popupForm.saveBtn(true)
  api.setNewCard(data)
  .then((res) => {
    const newCard = creatCard(res, userId);
    sectionCard.addItem(newCard);
    popupForm.close()
  })
  .catch((error) => {
    console.log(error)
  })
  .finally(() => {
    popupForm.saveBtn(false)
  })  
}

function submitHandlerProfile(values) {
  popupEditProfile.saveBtn(true)
  api.editUserInfo(values)
  .then(valuesUpd => {
    userInfo.setUserInfo(valuesUpd)
    popupEditProfile.close()
  })
  .catch((error) => {
    console.log(error)
  })
  .finally(() => {
    popupEditProfile.saveBtn(false)
  }) 
};

function likeCard (card) {
  api.like(card.getId(), card.getIsLiked())
  .then(res => {
    card.updLikesInfo(res.likes)
  })
}


// функция создания карточек
function creatCard(item, userId) {  
  const cardElement = new Card(item, '#template', handleCardClick, handleCardDelet, userId, likeCard);
  return cardElement.render();
}

// функция передачи данных для открытия первью карточки
function handleCardClick (data) {
  return popupImage.open(data);
};

// попытался использовать константы profile__title и __subtitle...
function editHadlerProfile() {
  const currentUserIfo = userInfo.getUserInfo();
  popupNameInput.value = currentUserIfo.name;
  popupCommitInput.value = currentUserIfo.about; 
};
// создание валидаторов для каждой формы
const validatorProfile = new FormValidator(config, profileForm);
validatorProfile.enableValidation();

const validatorCard = new FormValidator(config, cardForm);
validatorCard.enableValidation();

const validatorAvatar = new FormValidator(config, avatarForm)
validatorAvatar.enableValidation();






