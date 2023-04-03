import React from 'react';
import {Api} from "../utils/Api.js";
import '../App.css';
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import {options} from "../utils/constant";
import {UserContext} from "../contexts/CurrentUserContext.js"


function App() {

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});
    const [currentUser, setCurrentUser] = React.useState({});
    const [cards, setCards] = React.useState([]);
    const api = new Api(options)

    function handleCardLike(card) {
        console.log(card)
        const isLiked = card.likes.some((i) => i._id === currentUser._id);
        if (isLiked) {
            api
                .deleteLike(card._id)
                .then((newCard) => {
                    setCards((state) =>
                        state.map((c) => (c._id === card._id ? newCard : c))
                    );
                })
                .catch((err) => console.log(err));
        } else {
            api
                .setLike(card._id)
                .then((newCard) => {
                    setCards((state) =>
                        state.map((c) => (c._id === card._id ? newCard : c))
                    );
                })
                .catch((err) => console.log(err));
        }
    }

    function handleDeleteCard(card) {
        api
            .deleteCard(card._id)
            .then(() => {
                setCards((newArray) =>
                    newArray.filter((item) => card._id !== item._id)
                );
            })
            .catch((err) => console.log(err))
    }

    React.useEffect(() => {
        Promise.all([api.getInfoProfile(), api.getInitialCards()]).then(
            ([data, cards]) => {
                setCurrentUser(data);
                setCards(cards)
            }
        ).catch(console.log);
    })

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard({});
    }

    return (
        <UserContext.Provider value={currentUser}>
        <div className="page">
            <Header/>
            <Main
                cards={cards}
                onEditAvatar={() => setIsEditAvatarPopupOpen(true)}
                onEditProfile={() => setIsEditProfilePopupOpen(true)}
                onAddPlace={() => setIsAddPlacePopupOpen(true)}
                handleCardClick={() => setSelectedCard}
                handleCardLike={() => handleCardLike}
                handleDeleteClick={() => handleDeleteCard}
                />
            <Footer/>
            <PopupWithForm name="edit-profile" className="profile-edit"
                           onClose={closeAllPopups}
                           isOpen={isEditProfilePopupOpen}
                           title='Редактировать профиль'
                           submitText='Сохранить'>
                <input name='userName' id="edit-name-input" type="text" placeholder="Ваше имя"
                       minLength="2" maxLength="40"
                       required
                       className="popup__input popup__input_type_name"/>
                <span id="edit-name-input-error" className="popup__input-span popup__input-span_type_name"></span>
                <input name='userProfession' id="edit-profession-input" type="text"
                       minLength="2" maxLength="200"
                       required
                       placeholder="О себе"
                       className="popup__input popup__input_type_profession"/>
                <span id="edit-profession-input-error"
                      className="popup__input-span popup__input-span_type_profession"></span>
            </PopupWithForm>
            <PopupWithForm name="add-form"
                           className="card-add"
                           onClose={closeAllPopups}
                           isOpen={isAddPlacePopupOpen}
                           title='Новое место'
                           submitText='Сохранить'>
                >
                <input name='cardName' id="add-name-input" type="text" placeholder="Название" minLength="2"
                       maxLength="30" required
                       className="popup__input popup__input_type_name"/>
                <span id="add-name-input-error" className="popup__input-span"></span>
                <input name='cardSrc' id="add-url-input" type="url" placeholder="Ссылка на картинку" required
                       className="popup__input popup__input_type_profession"/>
                <span id="add-url-input-error" className="popup__input-span popup__input-span_type_profession"></span>
            </PopupWithForm>
            <PopupWithForm name="delete-card-form"
                           className="delete-card"
                           title='Вы уверены?'
                           submitText='Да'
                           // onDeleteSubmit={handleDeleteCard}
            >
            </PopupWithForm>
            <PopupWithForm name="new-avatar-form"
                           className="new-avatar"
                           onClose={closeAllPopups}
                           isOpen={isEditAvatarPopupOpen}
                           title='Обновить аватар'
                           submitText='Сохранить'>
                >
                <input name='newAvatar' id="change-new-avatar" type="url" placeholder="Ссылка на картинку" minLength="2"
                       maxLength="infinity" required
                       className="popup__input popup__input_type_name"/>
                <span id="change-new-avatar-error" className="popup__input-span"></span>
            </PopupWithForm>
            <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
        </div>
            </UserContext.Provider>
    );
}

export default App;
