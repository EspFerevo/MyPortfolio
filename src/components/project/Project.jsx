import { NavLink } from 'react-router-dom';
import './style.css';

const Project = ({ title, img }) => {
 return (
  <NavLink>
   <li className="project">
    <a href="./project-page.html">
     <img src={img} alt={title} className="project__img" />
     <h3 className="project__title">{title}</h3>
    </a>
   </li>
  </NavLink>
 );
};

export default Project;
