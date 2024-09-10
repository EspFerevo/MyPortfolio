///
import './style.css';
import { MdScreenshotMonitor } from "react-icons/md";


///
const Header = () => {
 return (
  <header className="header">
   <div className="header__wrapper">
    <h1 className="header__title">
     <strong>
      Hi, my name is <em>Oleksandr</em>
     </strong>
     <br />a Frontend Developer
    </h1>
    <div className="header__text">
     <p>with passion for learning and creating.</p>
    </div>
    <a href="./public/Мотиваційний_лист_Чекреньов_О_Р_" className="btn" download>
     Download CV
    </a>
   </div>
  </header>
 );
};

export default Header;
