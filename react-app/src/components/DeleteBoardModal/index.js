import React, {useState} from "react";
import { MainModal } from "../../context/MainModal";
import style from '../CreateBoardModal/CreateBoard.module.css';
import DeleteBoardModal from "./DeleteBoardModal";

const DeleteBoardBtn = ({boardCardId, setBoardMenuActive, setBoardCardId}) => {
    const [showMainModal, setShowMainModal] = useState(false);

    const handleOpen = async () => {
        setShowMainModal(true)
    };

    return (
        <>
            <div onClick={handleOpen} className={style.boardMenuBtn}>Delete Board</div>
            {showMainModal && (
                <MainModal onClose={() => {setShowMainModal(false); setBoardMenuActive(false)}}>
                    <DeleteBoardModal setShowMainModal={setShowMainModal} boardCardId={boardCardId} setBoardMenuActive={setBoardMenuActive}/>
                </MainModal>
            )}
        </>
    );
};


export default DeleteBoardBtn;
