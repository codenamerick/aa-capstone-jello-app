import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as boardActions from '../../store/boards';
import BoardNav from '../Board/BoardNav';
import CreateBoardFormModal from '../CreateBoardModal';
import DeleteBoardBtn from '../DeleteBoardModal';
import EditBoardModal from '../EditBoardModal';
import style from "./Dashboard.module.css";

const Dashboard = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => (state.session.user));
    const userId = sessionUser.id
    const boards = useSelector((state) => Object.values(state.boards));
    // const board = boards.find(({user_id}) => user_id === +userId);
    const [boardCardId, setBoardCardId] = useState('');
    const [boardOwnerId, setBoardOwnerId] = useState('');
    const [boardMenuActive, setBoardMenuActive] = useState(false);

    useEffect(() => {
        dispatch(boardActions.getBoardsThunk());
    }, [dispatch])

    const editBoardBtn = (
        <EditBoardModal boardCardId={boardCardId} setBoardCardId={setBoardCardId} setBoardMenuActive={setBoardMenuActive} boardMenuActive={boardMenuActive}/>
    );

    const deleteBoard = (
        <DeleteBoardBtn boardCardId={boardCardId} setBoardCardId={setBoardCardId} setBoardMenuActive={setBoardMenuActive} boardMenuActive={boardMenuActive}/>
    );

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
                            <div key={board.id} className={style.boardCard} onMouseOver={() => setBoardOwnerId(board.user_id)}>
                                <div className={style.boardBg} style={{backgroundImage:'url(' + board.image_url + ')'}}></div>
                                <div className={style.cardOverlay}></div>
                                <div className={style.boardTitle}>
                                    <p>{board.name}</p>
                                </div>
                                <Link to={`/boards/${board.id}`} className={style.boardLink}>
                                </Link>
                                {boardOwnerId === userId && (
                                    <div>
                                        <div id={`boardMenuBtn-${board.id}`} className={style.boardMenuBtn} onClick={() => {setBoardCardId(board.id); setBoardMenuActive(true);}}>
                                            <i className="fas fa-ellipsis-h"></i>
                                        </div>
                                        {boardMenuActive && (
                                            <div>
                                            {boardCardId === board.id && (
                                                <>
                                                    <div className={style.boardMenuModalBg} onClick={() => setBoardMenuActive(false)}></div>
                                                    <div id={`board-menu-${board.id}`} className={style.boardMenuWrapper}>
                                                        {editBoardBtn}
                                                        {deleteBoard}
                                                    </div>
                                                </>
                                            )}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
};


export default Dashboard;
