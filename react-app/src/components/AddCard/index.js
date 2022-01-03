import React from "react";
import style from './AddCard.module.css';

const AddCardBtn = ({setAddCardActive, setListIdOnCard, cardListId}) => {
    const handleClick = () => {
        setListIdOnCard(cardListId)
        setAddCardActive(true);
    };

    return (
        <div className={style.AddCardBtn} onClick={handleClick}>
            <div>
                <i className="fas fa-plus"></i>
                <p>Add a card</p>
            </div>
            <i className="fas fa-window-maximize"></i>
        </div>
    );
};

export default AddCardBtn;
