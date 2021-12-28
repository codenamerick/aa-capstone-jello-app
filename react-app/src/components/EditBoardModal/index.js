import React, {useState} from "react";
import { MainModal } from "../../context/MainModal";
import style from '../CreateBoardModal/CreateBoard.module.css';
import EditBoardForm from "./EditBoardForm";

const EditBoardModal = ({boardCardId, setBoardMenuActive, setBoardCardId}) => {
    const [showMainModal, setShowMainModal] = useState(false);

    const handleOpen = async () => {
        setShowMainModal(true)
    };

    return (
        <>
            <div onClick={handleOpen}>Edit Board</div>
            {showMainModal && (
                <MainModal onClose={() => {setShowMainModal(false); setBoardMenuActive(false)}}>
                    <EditBoardForm setShowMainModal={setShowMainModal} boardCardId={boardCardId} setBoardMenuActive={setBoardMenuActive}/>
                </MainModal>
            )}
        </>
    );
};


export default EditBoardModal;
