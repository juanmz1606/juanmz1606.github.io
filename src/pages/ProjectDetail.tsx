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
  Code2,
  ExternalLink,
} from "lucide-react";
import TechTag from "../components/TechTag";
import RepoLinks from "../components/RepoLinks";
import { useState } from "react";

const ProjectDetail: React.FC = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [activeImg, setActiveImg] = useState(0);

  if (!project)
    return (
      <div className="error-container">
        <p>Proyecto no encontrado</p>
        <Link to="/" className="back-link">
          <ArrowLeft size={16} /> Volver al inicio
        </Link>
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
              <p className="role-tag">
                {project.role || "Desarrollador Software"}
              </p>
            </div>
          </header>

          <div className="detail-grid">
            {/* Columna Principal - Descripción y Features */}
            <main className="detail-main">
              <section className="detail-section">
                <h2>
                  <BookOpen size={20} /> Descripción
                </h2>
                <p className="description-text">{project.description}</p>
              </section>

              {project.architecture && (
                <section className="detail-section">
                  <h2>
                    <Layers size={20} /> Arquitectura
                  </h2>
                  <p className="architecture-text">{project.architecture}</p>
                </section>
              )}

              <section className="detail-section">
                <h2>
                  <CheckCircle2 size={20} /> Funcionalidades clave
                </h2>
                <ul className="features-grid">
                  {project.features.map((f) => (
                    <li key={f}>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </main>

            {/* Columna Lateral - Tech Stack y Repos */}
            <aside className="detail-sidebar">
              {project.image && (
                <section className="sidebar-block">
                  <div className="image-carousel">
                    <img
                      src={
                        [project.image, ...(project.gallery ?? [])][activeImg]
                      }
                      alt={`Captura ${activeImg + 1} de ${project.title}`}
                      className="carousel-main"
                      onClick={() =>
                        setLightboxImg(
                          [project.image!, ...(project.gallery ?? [])][
                            activeImg
                          ],
                        )
                      }
                    />
                    {(project.gallery ?? []).length > 0 && (
                      <>
                        <div className="carousel-controls">
                          <button
                            className="carousel-btn"
                            onClick={() =>
                              setActiveImg((i) => Math.max(0, i - 1))
                            }
                            disabled={activeImg === 0}
                          >
                            ‹
                          </button>
                          <span className="carousel-counter">
                            {activeImg + 1} /{" "}
                            {1 + (project.gallery?.length ?? 0)}
                          </span>
                          <button
                            className="carousel-btn"
                            onClick={() =>
                              setActiveImg((i) =>
                                Math.min(i + 1, project.gallery?.length ?? 0),
                              )
                            }
                            disabled={
                              activeImg === (project.gallery?.length ?? 0)
                            }
                          >
                            ›
                          </button>
                        </div>

                        <div className="carousel-thumbs">
                          {[project.image, ...(project.gallery ?? [])].map(
                            (img, i) => (
                              <img
                                key={i}
                                src={img}
                                alt={`Miniatura ${i + 1}`}
                                className={`carousel-thumb ${activeImg === i ? "active" : ""}`}
                                onClick={() => setActiveImg(i)}
                              />
                            ),
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </section>
              )}

              <section className="sidebar-block">
                <h3>
                  <Code2 size={18} /> Tecnologías
                </h3>
                <div className="tech-tags">
                  {project.stack.map((t) => (
                    <TechTag key={t} tech={t} variant="pill" />
                  ))}
                </div>
              </section>

              <section className="sidebar-block">
                <h3>
                  <Github size={18} /> Recursos y Código
                </h3>
                <div className="resource-links">
                  <RepoLinks project={project} variant="links" />

                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="res-link live"
                    >
                      <ExternalLink size={16} /> Ver sitio en vivo
                    </a>
                  )}

                  {project.documentation?.technicalManual && (
                    <a
                      href={project.documentation.technicalManual}
                      target="_blank"
                      rel="noreferrer"
                      className="res-link doc"
                    >
                      <BookOpen size={16} /> Manual Técnico
                    </a>
                  )}

                  {project.documentation?.demoVideo && (
                    <a
                      href={project.documentation.demoVideo}
                      target="_blank"
                      rel="noreferrer"
                      className="res-link video"
                    >
                      <Video size={16} /> Video Demo
                    </a>
                  )}
                </div>
              </section>
            </aside>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div className="lightbox-overlay" onClick={() => setLightboxImg(null)}>
          <img
            src={lightboxImg}
            alt="Vista ampliada"
            className="lightbox-img"
          />
        </div>
      )}
    </section>
  );
};

export default ProjectDetail;
