import React, { useState } from 'react';
import MobileBoardNav from './MobileBoardNav';
import "./MobileNav.css";

const BoardHamburger = () => {
  const [boardMobileMenuActive, setBoardMobileMenuActive] = useState('');
  const [boardMobileMenuOpen, setBoardMobileMenuOpen] = useState('');
  // const [mobileMenuBg, setMobileMenuBg] = useState(false);
  const [mobileNavBackdrop, setMobileNavBackdrop] = useState('');

  const handleHamburgerClick = () => {

    if (boardMobileMenuOpen === 'mobile-nav-open') {
      setBoardMobileMenuActive('');
      setBoardMobileMenuOpen('');
      // setMobileMenuBg(false);
      setMobileNavBackdrop('');
    } else {
      setMobileNavBackdrop('mobile-nav-transparent-bg-active')
      setBoardMobileMenuActive('-open');
      setBoardMobileMenuOpen('mobile-nav-open');
      // setMobileMenuBg(true);
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
      <div className={`mobile-nav-transparent-bg ${mobileNavBackdrop}`} onClick={() => {setBoardMobileMenuActive(''); setBoardMobileMenuOpen(''); setMobileNavBackdrop('');}}></div>
      {/* {mobileMenuBg && (
        <div className={`mobile-nav-transparent-bg ${mobileNavBackdrop}`} onClick={() => {setBoardMobileMenuActive(''); setBoardMobileMenuOpen(''); setMobileMenuBg(false);}}></div>
      )} */}
    </>
  );
}

export default BoardHamburger;
