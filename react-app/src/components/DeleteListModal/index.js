import React, {useState} from "react";
import { MainModal } from "../../context/MainModal";
import style from '../CreateBoardModal/CreateBoard.module.css';
import DeleteListModal from "./DeleteListModal";

const DeleteListBtn = ({listId, setListMenuActive}) => {
    const [showMainModal, setShowMainModal] = useState(false);

    const handleOpen = async () => {
        setShowMainModal(true)
    };

    return (
        <>
            <div onClick={handleOpen} className={style.boardMenuBtn}>Delete List</div>
            {showMainModal && (
                <MainModal onClose={() => {setShowMainModal(false); setListMenuActive(false)}}>
                    <DeleteListModal setShowMainModal={setShowMainModal} listId={listId} setListMenuActive={setListMenuActive}/>
                </MainModal>
            )}
        </>
    );
};


export default DeleteListBtn;
