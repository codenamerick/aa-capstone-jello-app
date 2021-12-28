import React from 'react';
import { NavLink } from 'react-router-dom';
import style from "./navbar.module.css";
import logo from '../components/Main/assets/jello-logo-main-final.svg';

const NavBar = () => {
  return (
    <nav>
      <div className={style.mainNavWrapper}>
        <ul>
          <li>
            <NavLink to='/' exact={true} activeClassName='active'>
              <img src={logo} alt='' />
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
