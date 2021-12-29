
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import CreateBoardMainBtn from '../CreateBoardModal/CreateBoardMainBtn';
import style from "./Board.module.css";
import logo from '../../components/Main/assets/jello-logo-main-final.svg';
import CreateListFormModal from '../CreateListModal';

const BoardNavSeconday = () => {
    const sessionUser = useSelector(state => state.session.user);
    const userName = sessionUser.username;

    return (
        <nav className={style.boardNavSecondary}>
            <div className={style.mainNavWrapper}>
                <ul>
                    <li className={style.secondaryBtn}>
                        <div>
                            Dashboard
                        </div>
                    </li>
                    <li className={style.secondaryBtn}>
                        <div>
                            Dashboard
                        </div>
                    </li>
                </ul>
                <ul>
                    <li className={style.secondaryBtn}>
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
