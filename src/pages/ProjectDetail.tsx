import "../styles/projectDetail.css";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { 
  ArrowLeft, 
  Github, 
  BookOpen, 
  Video, 
  Layers, 
  CheckCircle2, 
  Code2 
} from "lucide-react";

const ProjectDetail: React.FC = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) return (
    <div className="error-container">
      <p>Proyecto no encontrado</p>
      <Link to="/" className="back-link"><ArrowLeft size={16}/> Volver al inicio</Link>
    </div>
  );

  return (
    <section className="project-detail-page">
      <div className="detail-container">
        <Link to="/" className="back-link">
          <ArrowLeft size={20} />
          Volver a proyectos
        </Link>

        <div className="detail-layout">
          {/* Cabecera del Proyecto */}
          <header className="detail-header">
            <div className="header-content">
              {project.academic && (
                <span className="academic-badge">Proyecto Académico</span>
              )}
              <h1>{project.title}</h1>
              <p className="role-tag">{project.role || "Desarrollador Software"}</p>
            </div>
          </header>

          <div className="detail-grid">
            {/* Columna Principal - Descripción y Features */}
            <main className="detail-main">
              <section className="detail-section">
                <h2><BookOpen size={20} /> Descripción</h2>
                <p className="description-text">{project.description.trim()}</p>
              </section>

              {project.architecture && (
                <section className="detail-section">
                  <h2><Layers size={20} /> Arquitectura</h2>
                  <p className="architecture-text">{project.architecture}</p>
                </section>
              )}

              <section className="detail-section">
                <h2><CheckCircle2 size={20} /> Funcionalidades clave</h2>
                <ul className="features-grid">
                  {project.features.map(f => (
                    <li key={f}><span>{f}</span></li>
                  ))}
                </ul>
              </section>
            </main>

            {/* Columna Lateral - Tech Stack y Repos */}
            <aside className="detail-sidebar">
              <section className="sidebar-block">
                <h3><Code2 size={18} /> Tecnologías</h3>
                <div className="tech-tags">
                  {project.stack.map(t => (
                    <span key={t} className="tech-tag-pill">{t}</span>
                  ))}
                </div>
              </section>

              <section className="sidebar-block">
                <h3><Github size={18} /> Recursos y Código</h3>
                <div className="resource-links">
                  {/* Si tiene múltiples repositorios */}
                  {project.repositories ? (
                    project.repositories.map(repo => (
                      <a key={repo.url} href={repo.url} target="_blank" rel="noreferrer" className="res-link">
                        <Github size={16} /> {repo.name}
                      </a>
                    ))
                  ) : (
                    /* Si solo tiene uno */
                    <a href={project.github} target="_blank" rel="noreferrer" className="res-link">
                      <Github size={16} /> Repositorio GitHub
                    </a>
                  )}

                  {/* Documentación */}
                  {project.documentation?.technicalManual && (
                    <a href={project.documentation.technicalManual} target="_blank" rel="noreferrer" className="res-link doc">
                      <BookOpen size={16} /> Manual Técnico
                    </a>
                  )}
                  {project.documentation?.demoVideo && (
                    <a href={project.documentation.demoVideo} target="_blank" rel="noreferrer" className="res-link video">
                      <Video size={16} /> Video Demo
                    </a>
                  )}
                </div>
              </section>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;