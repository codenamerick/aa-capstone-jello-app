import React, {useState} from "react";
import { MainModal } from "../../context/MainModal";
import style from "../Board/Board.module.css";

const InviteUserModal = ({boardId}) => {
    const [showMainModal, setShowMainModal] = useState(false);

    const handleOpen = async () => {
        setShowMainModal(true)
    };

    return (
        <>
            <div onClick={handleOpen} className={style.secondaryBtn}>Invite</div>
            {showMainModal && (
                <MainModal onClose={() => {setShowMainModal(false);}}>
                    Invite people
                </MainModal>
            )}
        </>
    );
};


export default InviteUserModal;
