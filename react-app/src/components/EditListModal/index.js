import React, {useState} from "react";
import { MainModal } from "../../context/MainModal";
import style from '../CreateBoardModal/CreateBoard.module.css';
import EditListForm from "./EditListForm";

const EditListModal = ({listId, setListMenuActive}) => {
    const [showMainModal, setShowMainModal] = useState(false);

    const handleOpen = async () => {
        setShowMainModal(true)
    };

    return (
        <>
            <div onClick={handleOpen} className={style.boardMenuBtn}>Edit List</div>
            {showMainModal && (
                <MainModal onClose={() => {setShowMainModal(false); setListMenuActive(false)}}>
                    <EditListForm setShowMainModal={setShowMainModal} listId={listId} setListMenuActive={setListMenuActive}/>
                </MainModal>
            )}
        </>
    );
};


export default EditListModal;
