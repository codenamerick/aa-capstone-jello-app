import React, { useState } from "react";
import { useDispatch } from "react-redux";
import style from './CardsContainer.module.css';
import { MainModal } from "../../context/MainModal";
import CardDetails from "./CardDetails";
import * as boardActions from '../../store/boards';
import { Draggable, Droppable } from "react-beautiful-dnd";

const CardsContainer = ({list, onDragEnd}) => {
    const dispatch = useDispatch();
    const [showMainModal, setShowMainModal] = useState(false);
    const [cardId, setCardId] = useState('');

    const deleteCard = () => {
        dispatch(boardActions.deleteCardThunk(list, cardId))
    };

    return (
        <div>
            <Droppable droppableId={`${list.id}`}>
                {provided => (
                    <div
                        className={style.CardsContainer}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {list.cards?.map((card, cardIndex) => (
                            <Draggable draggableId={`${card.id}`} index={cardIndex} key={card.id}>
                                {provided => (
                                    <div className={style.openCardDetails}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref={provided.innerRef}
                                    >
                                        <div className={style.card} onClick={() => {setShowMainModal(true); setCardId(card.id);}}>
                                            <div>
                                                <p>{card.name}</p>
                                            </div>
                                        </div>
                                        <div className={style.trashIconWrapper} onMouseOver={() => setCardId(card.id)} onClick={deleteCard}>
                                            <i className="fas fa-trash-alt"></i>
                                        </div>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
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
