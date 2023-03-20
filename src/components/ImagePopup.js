function ImagePopup() {
    return (
        <div name="popup_photo" className="popup popup_type_photo">
            <figure className="popup__caption">
                <button name='popup-photo-close' className="popup__close"></button>
                <img src="src/components/App#" alt="" className="popup__image"/>
                <figcaption className="popup__figcaption"></figcaption>
            </figure>
        </div>
    );
}
export default ImagePopup;

