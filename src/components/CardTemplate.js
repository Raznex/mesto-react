import React from "react";

function CardTemplate(props) {
return(
    <div id="card-add">
        <article className="element">
            <div className="element__photocard">
                <img src={props.card.src} alt={props.card.src} className="element__image"/>
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
    </div>
)
}

export default CardTemplate;