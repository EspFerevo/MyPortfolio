///
import './moon.svg';
import './sun.svg';
import './styles.css';

///
const DarkModeBtn = () => {
 return (
  <button className="dark-mode-btn">
   <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
   <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
  </button>
 );
};

export default DarkModeBtn;
addEventListener;
