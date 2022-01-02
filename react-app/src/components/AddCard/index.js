import React, { useState } from "react";
import style from './AddCard.module.css';

const AddCardBtn = () => {
    // const [showMainModal, setShowMainModal] = useState(false);
    // const [cardId, setCardId] = useState('');

    return (
        <div className={style.AddCardBtn}>
            <div>
                <i className="fas fa-plus"></i>
                <p>Add a card</p>
            </div>
            <i className="fas fa-window-maximize"></i>
        </div>
    );
};

export default AddCardBtn;
