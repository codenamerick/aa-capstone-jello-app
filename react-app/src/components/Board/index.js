import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Redirect, Link, useParams } from 'react-router-dom';
import * as boardActions from '../../store/boards';
import style from "./Board.module.css";
import BoardNav from './BoardNav';
import BoardNavSeconday from './BoardNavSeconday';

const Board = () => {
    const {boardId} = useParams();
    const dispatch = useDispatch();
    const lists = useSelector((state) => state.boards?.[boardId]?.lists);

    useEffect(() => {
        dispatch(boardActions.getBoardsThunk());
    }, [dispatch])

    return (
        <div className={style.boardWrapper}>
            <BoardNav />
            <BoardNavSeconday />
            <div className={style.boardCanvas}>
                {lists?.map((list) => (
                    <div key={list.id} className={style.listWrapper}>
                        <p>{list.name}</p>
                        <div>
                            card
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};


export default Board;
