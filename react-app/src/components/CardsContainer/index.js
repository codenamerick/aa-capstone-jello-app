import React, { useState } from "react";
import { useDispatch } from "react-redux";
import style from './CardsContainer.module.css';
import { MainModal } from "../../context/MainModal";
import CardDetails from "./CardDetails";
import * as boardActions from '../../store/boards';
import { Droppable } from "react-beautiful-dnd";

const CardsContainer = ({list}) => {
    const dispatch = useDispatch();
    const [showMainModal, setShowMainModal] = useState(false);
    const [cardId, setCardId] = useState('');
    const deleteCard = () => {
        dispatch(boardActions.deleteCardThunk(list, cardId))
    };

    return (
        <div className={style.CardsContainer}>
            <Droppable droppableId={list.id}>
                {provided => {
                    {list.cards?.map((card) => (
                        <div className={style.openCardDetails} key={card.id}>
                            <div className={style.card} onClick={() => {setShowMainModal(true); setCardId(card.id);}}>
                                <div>
                                    <p>{card.name}</p>
                                </div>
                            </div>
                            <div className={style.trashIconWrapper} onMouseOver={() => setCardId(card.id)} onClick={deleteCard}>
                                <i className="fas fa-trash-alt"></i>
                            </div>
                        </div>
                    ))}
                }}
            </Droppable>
            {showMainModal && (
                <MainModal onClose={() => setShowMainModal(false)}>
                    <CardDetails setShowMainModal={setShowMainModal} list={list} cardId={cardId}/>
                </MainModal>
            )}
        </div>
    );
};

export default CardsContainer;
