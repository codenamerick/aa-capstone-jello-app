import React, { useState } from "react";
import style from './CardsContainer.module.css';
import { MainModal } from "../../context/MainModal";
import CardDetails from "./CardDetails";

const CardsContainer = ({list}) => {
    const [showMainModal, setShowMainModal] = useState(false);

    return (
        <div className={style.CardsContainer}>
            {list.cards?.map((card) => (
                <div key={card.id} className={style.card} onClick={() => setShowMainModal(true)}>
                    <p>{card.name}</p>
                </div>
            ))}
            {showMainModal && (
                <MainModal onClose={() => setShowMainModal(false)}>
                    <CardDetails setShowMainModal={setShowMainModal} list={list} />
                </MainModal>
            )}
        </div>
    );
};

export default CardsContainer;
