import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from "react-router-dom";
import * as boardActions from '../../store/boards';
import style from '../CreateBoardModal/CreateBoard.module.css';

const DeleteListModal = ({setShowMainModal, listId, setListMenuActive}) => {
    const {boardId} = useParams();
    const dispatch = useDispatch();
    const boards = useSelector((state) => Object.values(state.boards));
    const board = boards.find(({id}) => id === +boardId);
    const lists = board.lists;
    const list = lists.find(({id}) => id === +listId);

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(boardActions.deleteListThunk(list));

        setShowMainModal(false);
        setListMenuActive(false);
    };

    const handleClose = () => {
        setShowMainModal(false);
        setListMenuActive(false);
    };

    return (
        <div className={style.formWrapper}>
            <div className={style.deleteBoardModal}>
                <p>Are you sure you want to delete this list?</p>
                <div className={style.inputWrapper}>
                    <button type='submit' className={style.mainBtn} onClick={handleSubmit}>Delete List</button>
                    <p onClick={handleClose}>Cancel</p>
                </div>
            </div>
        </div>
    );
};


export default DeleteListModal;
