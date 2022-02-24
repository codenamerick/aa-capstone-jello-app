import React from 'react';
import { useSelector } from 'react-redux';
import "./MobileNav.css";

const MobileBoardNav = ({boardMobileMenuOpen}) => {
  const sessionUser = useSelector(state => state.session.user);
  const userName = sessionUser.username;

  return (
    <div className={`mobile-nav ${boardMobileMenuOpen}`}>
        {userName}

    </div>
  );
}

export default MobileBoardNav;
