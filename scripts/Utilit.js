import {config} from './Config.js'

// ощбщая фуекция открытия попапа
export function openPopup (popup) {
  // resetFormState(popup, config)
  popup.classList.add('popup_visible');
  enableEscListener(config)
};


// общая функция закрытия попапа
export function closePopup (popup) {
  popup.classList.remove('popup_visible');
  document.removeEventListener('keyup', handleEscListener)
};

//навешиваем слушатель кнопки Esc на документ
 function enableEscListener() {
  document.addEventListener('keyup', handleEscListener);
}
// определяем что это нужное событие
 function handleEscListener (e) {
  e.preventDefault();
  isEscEvt(e, closePopup);
}

//при нужном событии активный попап передается в функцию закрытия попапа
 function isEscEvt(e, action) {
  if (e.key === 'Escape') {
  const popupActiv = document.querySelector('.popup_visible');
  action(popupActiv);
  }
}