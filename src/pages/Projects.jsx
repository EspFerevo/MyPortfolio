///
import Project from '../components/project/Project.jsx';
import { projects } from '../helpers/PojectsList.jsx';

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map(Project, index => {
            return (
              <Project key={index} title={Project.title} img={Project.img} />
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Projects;
