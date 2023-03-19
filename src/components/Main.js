function handleEditAvatarClick() {
   const popupEdit = document.querySelector('.popup_type_profile-edit');
   popupEdit.classList.add('popup_is-opened')
}
function handleEditProfileClick() {
    console.log('Кнопка нажата!');
}
function handleAddPlaceClick() {
    console.log('Кнопка нажата!');
}

function Main() {
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__card">
                    <button className="profile__container-avatar" type="button" onClick={handleEditAvatarClick}>
                        <img className="profile__avatar" src="src/components/App#" alt="Аватар" />
                    </button>
                    <div className="profile__profile-info">
                        <div className="profile__title">
                            <h1 className="profile__name">Jaqe</h1>
                            <button name='popup-edit-open' type="button" className="profile__edit-button" onClick={handleEditProfileClick}></button>
                        </div>
                        <p className="profile__profession"></p>
                    </div>
                </div>
                <button name='popup-add-open' type="button" className="profile__add-button" onClick={handleAddPlaceClick}></button>
            </section>
            <section className="elements"></section>
        </main>
    );
}

export default Main;