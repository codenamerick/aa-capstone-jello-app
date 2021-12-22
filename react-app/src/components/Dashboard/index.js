import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Redirect, Link } from 'react-router-dom';
import * as boardActions from '../../store/boards';
import style from "./Dashboard.module.css";

const Dashboard = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => (state.session.user));
    const userId = sessionUser.id
    const boards = useSelector((state) => Object.values(state.boards));
    console.log('boards from dashboard---: ', boards)
    console.log('user from dashboard comp----: ', userId);

    useEffect(() => {
        dispatch(boardActions.getBoardsThunk(userId));
    }, [dispatch])

    return (
        <div className={style.dashboardWrapper}>
            <div>
                <div className={style.dashboardHeader}>
                    <h2>My Boards</h2>
                    <div className={style.addBtn}>+</div>
                </div>
                <div className={style.cardWrapper}>
                    {boards.map((board) => (
                        <li key={board.id} className={style.boardCard} style={{backgroundImage:'url(' + board.image_url + ')'}}>
                            <div className={style.cardOverlay}></div>
                            <div className={style.boardTitle}>
                                <p>{board.name}</p>
                            </div>
                        </li>
                    ))}
                </div>
            </div>
        </div>
    )
};


export default Dashboard;
