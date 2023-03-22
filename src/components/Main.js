import React from 'react';
import {Api} from "../utils/Api.js";
import {options} from "../utils/constant.js";
import CardTemplate from './CardTemplate.js';

function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);
    const api = new Api(options)

    React.useEffect(() => {
        Promise.all([api.getInfoProfile(), api.getInitialCards()]).then(
            ([data, cards]) => {
                setUserName(data.name);
                setUserDescription(data.about);
                setUserAvatar(data.avatar);
                setCards(cards.map((card) => ({
                    id: card._id,
                    src: card.link,
                    cardName: card.name,
                    alt: card.name,
                    likes: card.likes
                })))
            }
        ).catch(console.log);
    })
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__card">
                    <button className="profile__container-avatar" type="button" onClick={props.onEditAvatar}>
                        <img className="profile__avatar" src={userAvatar} alt="Аватар" />
                    </button>
                    <div className="profile__profile-info">
                        <div className="profile__title">
                            <h1 className="profile__name">{userName}</h1>
                            <button name='popup-edit-open' type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
                        </div>
                        <p className="profile__profession">{userDescription}</p>
                    </div>
                </div>
                <button name='popup-add-open' type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
            </section>
            <section className="elements">
                {
                    cards.map((card) => {
                        return <CardTemplate key={card.id} card={card} onCardClick={props.handleCardClick()}/>
                    })
                }
            </section>
        </main>
    );
}

export default Main;