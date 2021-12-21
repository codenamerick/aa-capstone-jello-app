import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Redirect, Link } from 'react-router-dom';
import * as boardActions from '../../store/boards';
import style from "./Dashboard.module.css";

const Dashboard = () => {
    const dispatch = useDispatch();
    const boards = useSelector((state) => (state.boards));
    console.log('boards from dashboard comp----: ', boards);

    useEffect(() => {
        dispatch(boardActions.getBoardsThunk());
    }, [dispatch])

    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    )
};


export default Dashboard;
