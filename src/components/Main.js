import {Api} from "../utils/Api.js";

function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__card">
                    <button className="profile__container-avatar" type="button" onClick={props.onEditAvatar}>
                        <img className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }}  alt="Аватар" />
                    </button>
                    <div className="profile__profile-info">
                        <div className="profile__title">
                            <h1 className="profile__name">Jaqe</h1>
                            <button name='popup-edit-open' type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
                        </div>
                        <p className="profile__profession"></p>
                    </div>
                </div>
                <button name='popup-add-open' type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
            </section>
            <section className="elements"></section>
        </main>
    );
}

export default Main;