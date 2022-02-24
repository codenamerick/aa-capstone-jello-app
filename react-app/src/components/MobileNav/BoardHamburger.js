import React, { useState } from 'react';
import "./MobileNav.css";

const BoardHamburger = () => {
  const [boardMobileMenuActive, setBoardMobileMenuActive] = useState('');
  const boardHamburger = document?.getElementById('board-hamburger');

  const handleHamburgerClick = () => {
    boardHamburger?.focus();
    setBoardMobileMenuActive('-open');
  };

  return (
    <div tabIndex='0' id='board-hamburger' className='hamburger-menu' onClick={handleHamburgerClick} onBlur={() => setBoardMobileMenuActive('')}>
        <div className={`hamburger-line hamburger-top${boardMobileMenuActive}`}></div>
        <div className={`hamburger-line hamburger-middle${boardMobileMenuActive}`}></div>
        <div className={`hamburger-line hamburger-bottom${boardMobileMenuActive}`}></div>
    </div>
  );
}

export default BoardHamburger;
