import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Redirect, Link } from 'react-router-dom';
import * as boardActions from '../../store/boards';
import BoardNav from '../Board/BoardNav';
import CreateBoardFormModal from '../CreateBoardModal';
import style from "./Dashboard.module.css";

const Dashboard = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => (state.session.user));
    const userId = sessionUser.id
    const boards = useSelector((state) => Object.values(state.boards));

    useEffect(() => {
        dispatch(boardActions.getBoardsThunk());
    }, [dispatch])

    return (
        <>
            <BoardNav />
            <div className={style.dashboardWrapper}>
                <div>
                    <div className={style.dashboardHeader}>
                        <h2>My Boards</h2>
                        <CreateBoardFormModal />
                    </div>
                    <div className={style.cardWrapper}>
                        {boards.map((board) => (
                            <div key={board.id} className={style.boardCard}>
                                <div className={style.boardBg} style={{backgroundImage:'url(' + board.image_url + ')'}}></div>
                                <div className={style.cardOverlay}></div>
                                <div className={style.boardTitle}>
                                    <p>{board.name}</p>
                                </div>
                                <Link to={`/boards/${board.id}`} className={style.boardLink}>
                                </Link>
                                <div className={style.boardMenuBtn} onClick={() => console.log('Open menu!')}>
                                    menu
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
};


export default Dashboard;
