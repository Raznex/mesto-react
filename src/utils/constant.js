export const options = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-60',
  headers: {
    authorization: 'abc6e6a5-09dc-42f2-b9c3-4bca87097ed4',
    'Content-Type': 'application/json',
  },
};

export const enableValidation = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_disabled",
  inputErrorClass: "popup__input_type_error-visible",
  errorClass: "popup__input-span_type_error",
};

const popupEditProfile = document.querySelector(".popup_type_profile-edit");
const popupCardElement = document.querySelector(".popup_type_card-add");
export const popupOpenButton = document.querySelector(".profile__edit-button");
export const popupCardOpenButton = document.querySelector('.profile__add-button');
export const popupChangeAvatarButton = document.querySelector('.profile__container-avatar');
export const formEditPopup = popupEditProfile.querySelector('#popup-edit-form')
export const cardsContainer = '.elements';
export const formAddPopup = popupCardElement.querySelector('#popup-add-form')
export const formAvatarPopup = document.querySelector('#popup-new-avatar-form')
