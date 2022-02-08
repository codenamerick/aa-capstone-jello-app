import React from 'react';
// import { useSelector } from 'react-redux';
import style from "./Board.module.css";
import CreateListFormModal from '../CreateListModal';
import InviteUserModal from '../InviteUser';
import { useParams } from 'react-router-dom';

const BoardNavSeconday = ({currentBoard}) => {
    // const sessionUser = useSelector(state => state.session.user);
    // const userName = sessionUser.username;
    const {boardId} = useParams();

    const inviteUserBtn = (
        <InviteUserModal boardId={boardId} />
    );

    return (
        <nav className={style.boardNavSecondary}>
            <div className={style.mainNavWrapper}>
                <ul className={style.secondaryNavLeft}>
                    <li className={style.boardNameWrapper}>
                        <div>
                            {currentBoard?.name}
                        </div>
                    </li>
                    <li>
                        {inviteUserBtn}
                    </li>
                </ul>
                <ul>
                    <li>
                        <div>
                            <CreateListFormModal />
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default BoardNavSeconday;
