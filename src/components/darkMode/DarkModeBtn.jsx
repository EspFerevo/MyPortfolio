///
import { useState } from 'react';
import sun from './../../img/icons/sun.svg';
import moon from './../../img/icons/moon.svg';
import './styles.css';

///
const DarkModeBtn = () => {
 const [darkMode, setDarkMode] = useState('light');

 const toogleDarkMode = () => {
  setDarkMode(() => {
   return currentValue === 'light' ? 'dark' : 'light';
  });
 };

 return (
  <button className="dark-mode-btn" onClick={toogleDarkMode}>
   <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
   <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
  </button>
 );
};

export default DarkModeBtn;
addEventListener;
