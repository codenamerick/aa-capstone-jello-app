import React from 'react';
import { useSelector } from 'react-redux';
import style from "./Board.module.css";
import CreateListFormModal from '../CreateListModal';

const BoardNavSeconday = ({currentBoard}) => {
    const sessionUser = useSelector(state => state.session.user);
    const userName = sessionUser.username;

    return (
        <nav className={style.boardNavSecondary}>
            <div className={style.mainNavWrapper}>
                <ul>
                    <li className={style.boardNameWrapper}>
                        <div>
                            {currentBoard?.name}
                        </div>
                    </li>
                    {/* <li className={style.secondaryBtn}>
                        <div>
                            Dashboard
                        </div>
                    </li> */}
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
