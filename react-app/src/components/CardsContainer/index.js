import React, { useState } from "react";
import { useDispatch } from "react-redux";
import style from './CardsContainer.module.css';
import { MainModal } from "../../context/MainModal";
import CardDetails from "./CardDetails";
import * as boardActions from '../../store/boards';

const CardsContainer = ({list}) => {
    const dispatch = useDispatch();
    const [showMainModal, setShowMainModal] = useState(false);
    const [cardId, setCardId] = useState('');
    const deleteCard = () => {
        dispatch(boardActions.deleteCardThunk(list, cardId))
    };

    return (
        <div className={style.CardsContainer}>
            {list.cards?.map((card) => (
                <div key={card.id} className={style.card} onClick={() => {setShowMainModal(true); setCardId(card.id);}}>
                    <div>
                        <p>{card.name}</p>
                    </div>
                    <div className={style.trashIconWrapper} onMouseOver={() => setCardId(card.id)} onClick={deleteCard}>
                        <i className="fas fa-trash-alt"></i>
                    </div>
                </div>
            ))}
            {showMainModal && (
                <MainModal onClose={() => setShowMainModal(false)}>
                    <CardDetails setShowMainModal={setShowMainModal} list={list} cardId={cardId}/>
                </MainModal>
            )}
        </div>
    );
};

export default CardsContainer;
