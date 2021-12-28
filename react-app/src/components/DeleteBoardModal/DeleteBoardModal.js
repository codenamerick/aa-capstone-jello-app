import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import * as boardActions from '../../store/boards';
import style from '../CreateBoardModal/CreateBoard.module.css';

const DeleteBoardModal = ({setShowMainModal, boardCardId, setBoardMenuActive}) => {
    const dispatch = useDispatch();
    const boards = useSelector((state) => Object.values(state.boards));
    const board = boards.find(({id}) => id === +boardCardId)
    const boardId = board.id;

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(boardActions.deleteBoardThunk(boardId));

        setShowMainModal(false);
        setBoardMenuActive(false);
    };

    const handleClose = () => {
        setShowMainModal(false);
        setBoardMenuActive(false);
    };

    return (
        <div className={style.formWrapper}>
            <div className={style.deleteBoardModal}>
                <p>Are you sure you want to delete this board?</p>
                <div className={style.inputWrapper}>
                    <button type='submit' className={style.mainBtn} onClick={handleSubmit}>Delete Board</button>
                    <p onClick={handleClose}>Cancel</p>
                </div>
            </div>
        </div>
    );
};


export default DeleteBoardModal;
