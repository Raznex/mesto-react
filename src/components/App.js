import '../App.css';
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

function App() {
  return (
      <body className="page">
        <Header/>
        <Main/>
        <Footer/>
      <div name="popup-edit-profile" className="popup popup_type_profile-edit">
        <div className="popup__container">
          <button name='popup-edit-close' className="popup__close"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form id="popup-edit-form" className="popup__form" noValidate>
            <input name='userName' id="edit-name-input" type="text" placeholder="Ваше имя"
                   minLength="2" maxLength="40"
                   required
                   className="popup__input popup__input_type_name" />
            <span id="edit-name-input-error" className="popup__input-span popup__input-span_type_name"></span>
            <input name='userProfession' id="edit-profession-input" type="text"
                   minLength="2" maxLength="200"
                   required
                   placeholder="О себе"
                   className="popup__input popup__input_type_profession" />
            <span id="edit-profession-input-error" className="popup__input-span popup__input-span_type_profession"></span>
            <button name='popup-edit-submit' type="submit" className="popup__save">Сохранить</button>
          </form>
        </div>
      </div>
      <div name="popup-card" className="popup popup_type_card-add">
          <div className="popup__container">
              <button name='popup-Card-Close' className="popup__close"></button>
              <h2 className="popup__title">Новое место</h2>
              <form id="popup-add-form" className="popup__form" noValidate>
                  <input name='cardName' id="add-name-input" type="text" placeholder="Название" minLength="2"
                         maxLength="30" required
                         className="popup__input popup__input_type_name"/>
                  <span id="add-name-input-error" className="popup__input-span"></span>
                  <input name='cardSrc' id="add-url-input" type="url" placeholder="Ссылка на картинку" required
                         className="popup__input popup__input_type_profession"/>
                  <span id="add-url-input-error" className="popup__input-span popup__input-span_type_profession"></span>
                  <button type="submit" name="button_add_save" className="popup__save">Создать</button>
              </form>
          </div>
      </div>
      <div name="popup_photo" className="popup popup_type_photo">
          <figure className="popup__caption">
              <button name='popup-photo-close' className="popup__close"></button>
              <img src="src/components/App#" alt="" className="popup__image"/>
              <figcaption className="popup__figcaption"></figcaption>
          </figure>
      </div>
      <div name="popup_delete-card" className="popup popup_type_delete-card">
          <div className="popup__container">
              <button name='popup_delete-card_close' className="popup__close"></button>
              <form className="popup__form">
                  <h2 className="popup__title popup__title_type_delete-card">Вы уверены?</h2>
                  <button type="submit" name="button_yes" className="popup__save popup__save_type_delete-card">Да</button>
              </form>
          </div>
      </div>
      <div name="popup_new-avatar" className="popup popup_type_new-avatar">
          <div className="popup__container">
              <button name='popup-Card-Close' className="popup__close"></button>
              <h2 className="popup__title">Обновить аватар</h2>
              <form id="popup-new-avatar-form" className="popup__form" noValidate>
                  <input name='newAvatar' id="change-new-avatar" type="url" placeholder="Ссылка на картинку" minLength="2"
                         maxLength="infinity" required
                         className="popup__input popup__input_type_name"/>
                  <span id="change-new-avatar-error" className="popup__input-span"></span>
                  <button type="submit" name="button_add_save" className="popup__save">Сохранить</button>
              </form>
          </div>
      </div>
      <template id="card-add">
          <article className="element">
              <div className="element__photocard">
                  <img src="src/components/App#" alt="" className="element__image"/>
                  <button name='popup-Card-delete' className="element__delete-button">
                  </button>
              </div>
              <div className="element__vote">
                  <h2 className="element__title">Card</h2>
                  <div className="element__like">
                      <button type="button" className="element__like-button">
                      </button>
                      <p className="element__counter">0</p>
                  </div>
              </div>
          </article>
      </template>
      </body>
  );
}

export default App;
