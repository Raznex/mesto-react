import React from "react";

function ImagePopup(props) {
    return (
        <div name="popup_photo" className={`popup popup_type_photo ${props.card && 'popup_is-opened'}`}>
            <figure className="popup__caption">
                <button name='popup-photo-close' className="popup__close" onClick={props.onClose}></button>
                <img src={props.card.src} alt={props.card.alt} className="popup__image" onClick={props.onClose}/>
                <figcaption className="popup__figcaption">{props.card.cardName}</figcaption>
            </figure>
        </div>
    );
}
export default ImagePopup;

