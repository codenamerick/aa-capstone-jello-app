import React, { useState } from 'react';
import MobileBoardNav from './MobileBoardNav';
import "./MobileNav.css";

const BoardHamburger = () => {
  const [boardMobileMenuActive, setBoardMobileMenuActive] = useState('');
  const [boardMobileMenuOpen, setBoardMobileMenuOpen] = useState('');
  const [mobileMenuBg, setMobileMenuBg] = useState(false);

  const handleHamburgerClick = () => {

    if (boardMobileMenuOpen === 'mobile-nav-open') {
      setBoardMobileMenuActive('');
      setBoardMobileMenuOpen('');
      setMobileMenuBg(false);
    } else {
      setBoardMobileMenuActive('-open');
      setBoardMobileMenuOpen('mobile-nav-open');
      setMobileMenuBg(true);
    }
  };

  return (
    <>
      <div tabIndex='0' id='board-hamburger' className='hamburger-menu' onClick={handleHamburgerClick}>
          <div className={`hamburger-line hamburger-top${boardMobileMenuActive}`}></div>
          <div className={`hamburger-line hamburger-middle${boardMobileMenuActive}`}></div>
          <div className={`hamburger-line hamburger-bottom${boardMobileMenuActive}`}></div>
      </div>
      <MobileBoardNav boardMobileMenuOpen={boardMobileMenuOpen} setBoardMobileMenuOpen={setBoardMobileMenuOpen} setBoardMobileMenuActive={setBoardMobileMenuActive}/>
      {mobileMenuBg && (
        <div className='mobile-nav-transparent-bg' onClick={() => {setBoardMobileMenuActive(''); setBoardMobileMenuOpen(''); setMobileMenuBg(false);}}></div>
      )}
    </>
  );
}

export default BoardHamburger;
