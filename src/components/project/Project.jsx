import { NavLink } from 'react-router-dom';
import './style.css';

const Project = ({ title, img, index }) => {
  return (
    <NavLink to={`/project/${index}`} className="project">
      <img src={img} alt={title} className="project__img" />
      <h3 className="project__title">{title}</h3>
    </NavLink>
  );
};

export default Project;
