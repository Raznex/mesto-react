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
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup";


function App() {

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});
    const [currentUser, setCurrentUser] = React.useState({});
    const [cards, setCards] = React.useState([]);
    const api = new Api(options)


    React.useEffect(() => {
        Promise.all([api.getInfoProfile(), api.getInitialCards()]).then(
            ([data, cards]) => {
                setCurrentUser(data);
                setCards(cards)
            }
        ).catch(console.log);
    })

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

    function handleUpdateUser(data) {
        api
            .editProfile(data)
            .then((data) => {
                setCurrentUser(data);
                closeAllPopups();
            })
            .catch((err) => console.log(err))
    }

    function handleAddPlace(card) {
        api
            .createCard(card)
            .then((newCard) => {
                setCards([newCard, ...cards])
                closeAllPopups();
            })
            .catch((err) => console.log(err))
    }

    function handleUpdateAvatar(avatar) {
        api
            .changeAvatar(avatar)
            .then((data) => {
                setCurrentUser(data);
                closeAllPopups();
            })
            .catch((err) => console.log(err))
    }


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
                <EditProfilePopup isOpen={isEditProfilePopupOpen}
                                  onClose={closeAllPopups}
                                  onUpdateUser={handleUpdateUser}/>
                <AddPlacePopup    isOpen={isAddPlacePopupOpen}
                                  onClose={closeAllPopups}
                                  onAddPlace={handleAddPlace}/>
                <EditAvatarPopup isOpen={isEditAvatarPopupOpen}
                                 onClose={closeAllPopups}
                                 onUpdateAvatar={handleUpdateAvatar}/>
                <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
                <PopupWithForm name="delete-card-form"
                               className="delete-card"
                               title='Вы уверены?'
                               submitText='Да'
                >
                </PopupWithForm>
            </div>
        </UserContext.Provider>
    );
}

export default App;
