
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import style from "./navbar.module.css";

const NavBar = () => {
  return (
    <nav>
      <div className={style.mainNavWrapper}>
        <ul>
          <li>
            <NavLink to='/' exact={true} activeClassName='active'>
              LOGO
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to='/login' exact={true} activeClassName='active'>
              Log in
            </NavLink>
          </li>
          <li>
            <NavLink to='/sign-up' exact={true} className={style.mainBtn}>
              Sign up
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
