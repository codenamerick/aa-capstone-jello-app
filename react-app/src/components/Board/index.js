import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Redirect, Link } from 'react-router-dom';
import * as boardActions from '../../store/boards';
import style from "./Board.module.css";
import BoardNav from './BoardNav';
import BoardNavSeconday from './BoardNavSeconday';

const Board = () => {
    // const dispatch = useDispatch();
    // const sessionUser = useSelector((state) => (state.session.user));
    // const userId = sessionUser.id
    const boards = useSelector((state) => (state.boards));
    console.log('boards from board canvas---: ', boards)
    // console.log('user from dashboard comp----: ', userId);

    // useEffect(() => {
    //     dispatch(boardActions.getBoardsThunk(userId));
    // }, [dispatch])

    return (
        <div className={style.boardWrapper}>
            <BoardNav />
            <BoardNavSeconday />
            <div className={style.boardCanvas}>
                <p>placeholder p</p>
            </div>
        </div>
    )
};


export default Board;
