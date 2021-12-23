
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import style from "./Board.module.css";

const BoardNav = () => {
  const sessionUser = useSelector(state => state.session.user);
  const userName = sessionUser.username;

  return (
    <nav>
      <div className={style.mainNavWrapper}>
        <ul>
          <li>
            <NavLink to='/' exact={true} className={style.navLogo}>
              LOGO
            </NavLink>
          </li>
          <li>
            <NavLink to={`/${userName}/boards`} exact={true} className={style.mainBtn}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <div className={style.mainBtn}>
              Create Board
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <LogoutButton />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default BoardNav;
