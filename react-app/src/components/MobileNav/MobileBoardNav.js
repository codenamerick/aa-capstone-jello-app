// import React from 'react';
// import { useSelector } from 'react-redux';
// import BoardHamburger from './BoardHamburger';
// import "./MobileNav.css";

// const MobileBoardNav = () => {
//   const sessionUser = useSelector(state => state.session.user);
//   const userName = sessionUser.username;

//   return (
//     <nav className={style.boardNavPrimary}>
//       <div className={style.mainNavWrapper}>
//         <ul>
//             <li>
//                 <NavLink to='/' exact={true} className={style.navLogo}>
//                     <img src={logo} alt='' />
//                 </NavLink>
//             </li>
//             <li>
//                 <NavLink to={`/${userName}/boards`} exact={true} className={style.mainBtn}>
//                     Dashboard
//                 </NavLink>
//             </li>
//             <li>
//                 <CreateBoardMainBtn />
//             </li>
//         </ul>
//         <ul>
//             <li>
//                 <BoardHamburger />
//             </li>
//             <li>
//                 <div className={style.logoutBtn}>
//                     <div className={style.navUsername}>
//                         {userName},
//                     </div>
//                     <LogoutButton />
//                 </div>
//             </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default MobileBoardNav;
