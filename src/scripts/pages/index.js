import '../../pages/index.css'
import Card from '../components/Сard.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js'
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

// создаем класс API
const api = new Api({
  token: '17967209-61dd-4a29-b076-c48750c9d1ad',
  cohort: 'cohort-24'
});


Promise.all([api.newUserInfo(), api.getCards()])
.then(([userData, cardsData]) => {
  setUserData(userData)
  sectionCard.renderer(cardsData)
})


function setUserData (userData) {
   userInfo.setUserInfo({name: userData.name, about: userData.about})
}

const sectionCard = new Section({
    rendererItem: (data) => {
      const card = creatCard(data);
      sectionCard.addItem(card)
    }
}, '.cards');

// sectionCard.renderer();

// создание попапа превью
const popupImage = new PopupWithImage('.popup_add-image');
popupImage.setEventListeners();

// создание попапа добавления карточек
const popupForm = new PopupWithForm('.popup_cards', submitHandlerCard);
popupForm.setEventListeners();

const popupEditProfile = new PopupWithForm('.popup_profile', submitHandlerProfile);
popupEditProfile.setEventListeners();

const userInfo = new UserInfo({name:'.profile__title', about: '.profile__subtitle'});

profileEditBtn.addEventListener('click', () => {
  editHadlerProfile();
  popupEditProfile.open();
  validatorProfile.resetFormState();
});


function submitHandlerCard(data) {
  api.setNewCard(data)
  .then((res) => {
    const newCard = creatCard(res);
    sectionCard.addItem(newCard);
  });  
 
} 


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
  const cardElement = new Card(item, '#template', handleCardClick, '.cards__number-like');
  return cardElement.render();
}

// функция передачи данных для открытия первью карточки
function handleCardClick (data) {
  return popupImage.open(data);
};




function submitHandlerProfile(values) {
  api.editUserInfo({name:values.name, about:values.about })
  .then(valuesUpd => {
    userInfo.setUserInfo({name: valuesUpd.name, about: valuesUpd.about})
  })
};

// попытался использовать константы profile__title и __subtitle...
function editHadlerProfile() {
  const currentUserIfo = userInfo.getUserInfo();
  popupNameInput.value = currentUserIfo.name;
  popupCommitInput.value = currentUserIfo.about; 
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

