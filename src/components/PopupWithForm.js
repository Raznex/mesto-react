function PopupWithForm() {
    return (
        <div name="popup-edit-profile" className={`popup popup_type_${props.name}`}   >
            <div className="popup__container">
                <button name='popup-edit-close' className="popup__close"></button>
                <h2 className="popup__title">{title}</h2>
                <form id={`popup__${name}`} className="popup__form" noValidate>
                    <button
                        type="submit"
                        className="popup__save"
                        name="submit"
                        defaultValue={submitText || 'Сохранить'}>{submitText || 'Сохранить'}
                    </button>
                </form>
            </div>
        </div>
    );
}
export default PopupWithForm;
