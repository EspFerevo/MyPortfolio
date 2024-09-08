import { NavLink } from 'react-router-dom';

import './style.css';

import DarkModeBtn from '../darkMode/DarkModeBtn';

const NavBar = () => {
 const activeLink = 'nav-list__link nav-list__link--active';
 const normal = 'nav-list__link';

 return (
  <nav className="nav">
   <div className="container">
    <div className="nav-row">
     <NavLink to="/" className="logo">
      <strong>My</strong> portfolio
     </NavLink>

     <ul className="nav-list">
      <li className="nav-list__item">
       <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeLink : normal)}
       >
        Home
       </NavLink>
      </li>

      <li className="nav-list__item">
       <NavLink
        to="/projects"
        className={({ isActive }) => (isActive ? activeLink : normal)}
       >
        Projects
       </NavLink>
      </li>

      <li className="nav-list__item">
       <NavLink
        to="/contacts"
        className={({ isActive }) => (isActive ? activeLink : normal)}
       >
        Contacts
       </NavLink>
      </li>
     </ul>

     <DarkModeBtn />
    </div>
   </div>
  </nav>
 );
};

export default NavBar;
