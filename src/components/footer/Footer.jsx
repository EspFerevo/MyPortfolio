///Social media import
import github from "./../../img/icons/gitHub.svg";
import linkedin from "./../../img/icons/linkedIn.svg";
import insta from "./../../img/icons/instagram.svg";

///
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a
                href="https://www.instagram.com/oleksandr.6125/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={insta} alt="Instagram" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://github.com/EspFerevo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="GitHub" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.linkedin.com/in/olekchekrenov/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2024 EsPFerevo</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
