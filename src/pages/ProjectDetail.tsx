import "../styles/projectDetail.css";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

const ProjectDetail: React.FC = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) return <p>Proyecto no encontrado</p>;

  return (
    <section className="project-detail-page">
      <div className="project-detail">
        <Link to="/projects" className="back-link">
          ← Volver a proyectos
        </Link>

        <div className="project-detail-card">
          <h1>{project.title}</h1>

          <p className="description">
            {project.description.trim()}
          </p>

          <h2>Funcionalidades principales</h2>
          <ul className="features-list">
            {project.features.map(f => (
              <li key={f}>{f}</li>
            ))}
          </ul>

          <h2>Tecnologías utilizadas</h2>
          <div className="tech-stack">
            {project.stack.map(t => (
              <span key={t} className="tech">
                {t}
              </span>
            ))}
          </div>

          <div className="actions">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn primary"
            >
              Ver repositorio en GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
