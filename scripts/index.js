let popup = document.querySelector('.popup');

let popupEdit = document.querySelector('.profile__edit-button');
console.log(popupEdit);
let popupClose = document.querySelector('.popup__close-icon');

let form = document.querySelector('.popup__content');

let nameProfile = document.querySelector('.profile__title');

let jobProfile= document.querySelector('.profile__subtitle');

let nameInput = document.querySelector ('.popup__item_el_name');

let jobInput = document.querySelector ('.popup__item_el_comment');




// функция открывающая попап
function openPopup () {
  popup.classList.add('popup_visible');

nameInput.value = nameProfile.textContent;
jobInput.value = jobProfile.textContent;
  
}

// функция закрывающая попап
function closePopup () {
  popup.classList.remove('popup_visible');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  
  nameProfile.textContent=nameInput.value;
  
  jobProfile.textContent=jobInput.value;


  closePopup();
}

// сценарий для открытия попап
popupEdit.addEventListener('click', function() {
  openPopup();
});

//cсценарии для закрытия попап через крестик 
popupClose.addEventListener('click', function(){
  closePopup();
});

form.addEventListener('submit', formSubmitHandler);



