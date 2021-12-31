import React from "react";
import style from './CardsContainer.module.css';

const CardsContainer = ({list}) => {

    return (
        <div className={style.CardsContainer}>
            {list.cards?.map((card) => (
                <div key={card.id} className={style.card}>
                    <p>{card.name}</p>
                </div>
            ))}
        </div>
    );
};

export default CardsContainer;
