import React, {useState} from "react";
import EditCardDescriptionForm from "../EditCard/EditCardDescriptionForm";
import EditCardNameForm from "../EditCard/EditCardNameForm";
import style from './CardsContainer.module.css';

const CardDetails = ({setShowMainModal, list, cardId}) => {
    const cardIndex = list.cards.findIndex((card) => card.id === cardId);
    const selectedCard = list.cards[cardIndex];
    const [editCardName, setEditCardName] = useState(false);
    const [editCardDescription, setEditCardDescription] = useState(false);

    const paragraphIcon = (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0.342857C0 0.153502 0.153502 0 0.342857 0H15.6571C15.8465 0 16 0.153502 16 0.342857V1.94286C16 2.13221 15.8465 2.28571 15.6571 2.28571H0.342857C0.153503 2.28571 0 2.13221 0 1.94286V0.342857Z" fill="white"/>
        <path d="M0 3.77157C0 3.58221 0.153502 3.42871 0.342857 3.42871H15.6571C15.8465 3.42871 16 3.58221 16 3.77157V5.37157C16 5.56092 15.8465 5.71443 15.6571 5.71443H0.342857C0.153503 5.71443 0 5.56092 0 5.37157V3.77157Z" fill="white"/>
        <path d="M0 7.19979C0 7.01044 0.153502 6.85693 0.342857 6.85693H15.6571C15.8465 6.85693 16 7.01044 16 7.19979V8.79979C16 8.98915 15.8465 9.14265 15.6571 9.14265H0.342857C0.153503 9.14265 0 8.98915 0 8.79979V7.19979Z" fill="white"/>
        <path d="M0 10.6285C0 10.4391 0.153502 10.2856 0.342857 10.2856H15.6571C15.8465 10.2856 16 10.4391 16 10.6285V12.2285C16 12.4179 15.8465 12.5714 15.6571 12.5714H0.342857C0.153503 12.5714 0 12.4179 0 12.2285V10.6285Z" fill="white"/>
        <path d="M0 14.0572C0 13.8679 0.153502 13.7144 0.342857 13.7144H11.0857C11.2751 13.7144 11.4286 13.8679 11.4286 14.0572V15.6572C11.4286 15.8466 11.2751 16.0001 11.0857 16.0001H0.342858C0.153503 16.0001 0 15.8466 0 15.6572V14.0572Z" fill="white"/>
        </svg>
    );

    return (
        <div className={style.cardDetailsWrapper}>
            <div className={style.cardHeader}>
                <div className={style.cardNameWrapper}>
                    <i className="fas fa-window-maximize"></i>
                    {editCardName ? <EditCardNameForm selectedCard={selectedCard} setEditCardName={setEditCardName} /> : <h2 onClick={() => setEditCardName(true)}>{selectedCard.name}</h2>}
                </div>
                <div className={style.closeIcon} onClick={() => setShowMainModal(false)}>
                    <i className="fas fa-times"></i>
                </div>
            </div>
            <div className={style.cardDescription}>
                <div className={style.cardDescriptionWrapper}>
                    {paragraphIcon}
                    <h3>Description</h3>
                </div>
                <div className={style.descriptionContent}>
                    {editCardDescription ? <EditCardDescriptionForm selectedCard={selectedCard} setEditCardDescription={setEditCardDescription} /> : <p onClick={() => setEditCardDescription(true)}>{!selectedCard.description || '' ? 'Add a more detailed description...' : selectedCard.description}</p>}
                </div>
            </div>
        </div>
    );
};


export default CardDetails;
