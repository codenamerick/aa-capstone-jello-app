import React, {useState} from "react";
import { MainModal } from "../../context/MainModal";
import CreateBoardForm from './CreateBoardForm';
import style from './CreateBoard.module.css';

const CreateBoardFormModal = () => {
    const [showMainModal, setShowMainModal] = useState(false);

    return (
        <>
            <div onClick={() => setShowMainModal(true)} className={style.secondaryAddBtn}>+</div>
            {showMainModal && (
                <MainModal onClose={() => setShowMainModal(false)}>
                    <CreateBoardForm setShowMainModal={setShowMainModal}/>
                </MainModal>
            )}
        </>
    );
};


export default CreateBoardFormModal;
