import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import "./MobileNav.css";

const MobileBoardNav = ({boardMobileMenuOpen}) => {
  const sessionUser = useSelector(state => state.session.user);
  const userName = sessionUser.username;

  return (
    <div className={`mobile-nav ${boardMobileMenuOpen}`}>
        <ul>
          <li>
            <NavLink to='/login' exact={true} activeClassName='active'>
              Log in
            </NavLink>
          </li>
          <li>
            <NavLink to='/sign-up' exact={true}>
              Sign up
            </NavLink>
          </li>
        </ul>
    </div>
  );
}

export default MobileBoardNav;
