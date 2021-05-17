
import Card from '../components/Сard.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import {
  config,
  initialCards,
  profileEditBtn,
  cardsEditBtn,
  profileForm,
  cardForm,  
  popupNameInput,
  popupCommitInput
} from '../utils/constants.js';

// создание попапа превью
const popupImage = new PopupWithImage('.popup_add-image');
popupImage.setEventListeners();

// создание попапа добавления карточек
const popupForm = new PopupWithForm('.popup_cards', submitHandlerCard);
popupForm.setEventListeners();

const userInfo = new UserInfo({name:'.profile__title', commit: '.profile__subtitle'});

const popupEditProfile = new PopupWithForm('.popup_profile', submitHandlerProfile);
popupEditProfile.setEventListeners();



profileEditBtn.addEventListener('click', () => {
  editHadlerProfile();
  popupEditProfile.open();
  validatorCard.resetFormState();
});

const sectionCard = new Section({
  data: initialCards,
    rendererItem: (data) => {
      data.forEach((item) => {
        const card = creatCard(item)
        return sectionCard.addItem(card)
      })
    }
}, '.cards');

sectionCard.renderer();

// создание валидаторов для каждой формы
const validatorProfile = new FormValidator(config, profileForm);
validatorProfile.enableValidation();

const validatorCard = new FormValidator(config, cardForm);
validatorCard.enableValidation();

// слушатель открытя формы карточки
cardsEditBtn.addEventListener('click', function() {
  popupForm.open();
  validatorCard.resetFormState();
});

// функция создания карточек
function creatCard(item) {
  const cardElement = new Card(item, '#template', handleCardClick);
  return cardElement.render();
}

// функция передачи данных для открытия первью карточки
function handleCardClick (data) {
  return popupImage.open(data);
};

function submitHandlerCard(values) {
  const sectionCard = new Section({
    data: values, 
    rendererItem: (values) => {
      const card = creatCard(values)
      return sectionCard.addItem(card)
    }
  }, '.cards');
  return sectionCard.renderer();
};

function submitHandlerProfile(values) {
  userInfo.setUserInfo(values);
};

// попытался использовать константы profile__title и __subtitle...
function editHadlerProfile() {
  const currentUserIfo = userInfo.getUserInfo();
  popupNameInput.value = currentUserIfo.name;
  popupCommitInput.value = currentUserIfo.commit; 
};



//обходчик по массивам, навешивает слушатели на оверлей
// popupArray.forEach((popupNew) => {
//   const overlay = popupNew.querySelector('.popup__overlay');
//   overlay.addEventListener('click', function(e) {
//     if(e.target === e.currentTarget) {
//       closePopup(popupNew);
//     } 
//   })
// });

