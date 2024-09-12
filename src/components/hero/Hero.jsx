///
import './style.css';

///
const Header = () => {
 return (
  <header className="header">
   <div className="header__wrapper">
    <h1 className="header__title">
     <strong>
      Hi, my name is <em>Oleksandr</em>
     </strong>
     <br />
     Frontend Developer
    </h1>
    <div className="header__text">
     <p>with passion for learning and creating.</p>
    </div>
    <a
     href="./../../../public/CV_Oleksandr_Chekrenov_Front-end Developer.pdf"
     className="btn"
     download
    >
     Download CV
    </a>
   </div>
  </header>
 );
};

export default Header;
