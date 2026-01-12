import "../styles/projects.css";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const Projects: React.FC = () => {
  return (
    <section className="projects">
      {/* Botón volver al inicio */}
      <Link to="/" className="back-home">
        ← Volver al inicio
      </Link>

      <h2>Proyectos</h2>

      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.slug} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.shortDescription}</p>
            <span>{project.stack.join(" · ")}</span>

            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn primary"
              >
                GitHub
              </a>

              <Link
                to={`/projects/${project.slug}`}
                className="btn secondary"
              >
                Ver detalles
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
