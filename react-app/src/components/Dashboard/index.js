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
        <div>
            <h1>Dashboard</h1>
            <div>
                {boards.map((board) => (
                    <li key={board.id}>{board.name}</li>
                ))}
            </div>
        </div>
    )
};


export default Dashboard;
