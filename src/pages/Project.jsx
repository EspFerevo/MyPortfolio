///
import { useParams } from 'react-router-dom';
import { projects } from '../helpers/PojectsList.jsx';
import GitBtn from '../components/btnGithub/GitBtn.jsx';

///
const Project = () => {
 const { id } = useParams();
 const project = projects[id];

 return (
  <main className="section">
   <div className="container">
    <div className="project-details">
     <h1 className="title-1">{project.title}</h1>
     <img
      src={project.imgBig}
      alt={project.title}
      className="project-details__cover"
     />
     <div className="project-details__desc">
      <p>Stack : {project.stack}</p>
     </div>

     {project.gitHubLink && <GitBtn link={project.gitHubLink} />}
    </div>
   </div>
  </main>
 );
};

export default Project;
