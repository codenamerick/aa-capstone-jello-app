import React, {useState} from "react";
import { MainModal } from "../../context/MainModal";
import CreateListForm from './CreateListForm';
import style from '../Board/Board.module.css';

const CreateListFormModal = () => {
    const [showMainModal, setShowMainModal] = useState(false);

    return (
        <>
            <div onClick={() => setShowMainModal(true)}>Create New List</div>
            {showMainModal && (
                <MainModal onClose={() => setShowMainModal(false)}>
                    <CreateListForm setShowMainModal={setShowMainModal}/>
                </MainModal>
            )}
        </>
    );
};


export default CreateListFormModal;
