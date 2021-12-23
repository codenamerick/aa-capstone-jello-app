import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Redirect, Link } from 'react-router-dom';
import * as boardActions from '../../store/boards';
import style from "./Board.module.css";
import BoardNav from './BoardNav';

const Board = () => {
    // const dispatch = useDispatch();
    // const sessionUser = useSelector((state) => (state.session.user));
    // const userId = sessionUser.id
    // const boards = useSelector((state) => Object.values(state.boards));
    // console.log('boards from dashboard---: ', boards)
    // console.log('user from dashboard comp----: ', userId);

    // useEffect(() => {
    //     dispatch(boardActions.getBoardsThunk(userId));
    // }, [dispatch])

    return (
        <div className={style.boardWrapper}>
            <BoardNav />
            <div>Made it to a board!</div>
        </div>
    )
};


export default Board;
