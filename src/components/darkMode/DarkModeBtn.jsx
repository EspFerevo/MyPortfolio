import { useState, useEffect, useRef } from 'react';
import sun from './../../img/icons/sun.svg';
import moon from './../../img/icons/moon.svg';
import './styles.css';

const DarkModeBtn = () => {

 const [darkMode, setDarkMode] = useState('light');
 const btnRef = useRef(null)

 useEffect(() => {
  if (darkMode === 'dark') {
   document.body.classList.add('dark');
  } else {
   document.body.classList.remove('dark');
  }
 }, [darkMode]);

 const toggleDarkMode = () => {
  setDarkMode(currentValue => (currentValue === 'light' ? 'dark' : 'light'));
 };

 return (
  <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
   <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
   <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
  </button>
 );
};

export default DarkModeBtn;
