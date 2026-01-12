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

          {project.academic && (
            <span className="academic-badge">
              Proyecto académico
            </span>
          )}

          <p className="description">
            {project.description.trim()}
          </p>

          {project.architecture && (
            <>
              <h2>Arquitectura</h2>
              <p className="architecture">
                {project.architecture}
              </p>
            </>
          )}

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

          {project.repositories && (
            <>
              <h2>Repositorios</h2>
              <ul className="repo-list">
                {project.repositories.map(repo => (
                  <li key={repo.url} className="repo-item">
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {repo.name}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}

          {project.documentation && (
            <>
              <h2>Documentación</h2>
              <div className="documentation-links">
                {project.documentation.technicalManual && (
                  <a
                    href={project.documentation.technicalManual}
                    target="_blank"
                    rel="noreferrer"
                    className="doc-link"
                  >
                    📘 Manual técnico
                  </a>
                )}

                {project.documentation.demoVideo && (
                  <a
                    href={project.documentation.demoVideo}
                    target="_blank"
                    rel="noreferrer"
                    className="doc-link"
                  >
                    🎥 Video demostrativo
                  </a>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
