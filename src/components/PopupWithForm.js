function PopupWithForm(props) {
    let isOpen;
    if (props.isOpen) {
        isOpen = "popup_is-opened";
    }
    return (
        <div className={`popup popup_type_${props.name} ${isOpen}`}   >
            <div className="popup__container">
                <button className="popup__close"
                        onClick={props.onClose}>
                    </button>
                <h2 className="popup__title">{props.title}</h2>
                <form id={`popup-${props.name}`} className="popup__form" noValidate>
                    {props.children}
                    <button
                        type="submit"
                        className="popup__save"
                        name="submit"
                       defaultValue={props.submitText}>
                        {props.submitText}
                    </button>
                </form>
            </div>
        </div>
    );
}
export default PopupWithForm;
