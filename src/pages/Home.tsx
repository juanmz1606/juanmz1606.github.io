import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { 
  ExternalLink, 
  Mail, 
  FolderGit2, 
  Github,   
  Linkedin
} from "lucide-react";
import { useState } from "react";
import "../styles/home.css";

const Home: React.FC = () => {
  const [expandedRepo, setExpandedRepo] = useState<string | null>(null);

  const toggleRepos = (slug: string) => {
    setExpandedRepo(expandedRepo === slug ? null : slug);
  };

  return (
    <section className="home-compact">
      <div className="home-layout">
        {/* Columna Izquierda - Info Personal */}
        <aside className="home-sidebar">
          <div className="sidebar-content">
            <div className="profile-info">
              <h1>Juan Esteban Meza Buitrago</h1>
              <h2>Ingeniero en Sistemas y Computación</h2>
              
              <p className="bio">
                Desarrollo de software con enfoque en aplicaciones robustas y 
                mantenibles. Experiencia en backend, APIs, automatización y 
                proyectos full stack.
              </p>
              
              <p className="bio-secondary">
                Apasionado por el aprendizaje continuo y las soluciones escalables.
              </p>
            </div>

            <div className="contact-section">
              <div className="social-buttons">
                <a
                  href="https://www.linkedin.com/in/juanmeza-sistemas"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn linkedin"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/juanmz1606"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn github"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
              </div>

              <a href="mailto:juanestebanmz79@gmail.com" className="email-link">
                <Mail size={16} />
                juanestebanmz79@gmail.com
              </a>
            </div>
          </div>
        </aside>

        {/* Columna Derecha - Proyectos */}
        <main className="projects-section">
          <h2 className="projects-title">Proyectos</h2>

          <div className="projects-list">
            {projects.map((project) => (
              <article key={project.slug} className="project-card">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  {project.academic && (
                    <span className="academic-badge">Académico</span>
                  )}
                </div>

                <p className="project-description">{project.shortDescription}</p>

                <div className="project-stack">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="tech-tag more">+{project.stack.length - 4}</span>
                  )}
                </div>

                <div className="project-actions">
                  {project.repositories ? (
                    <div className="repo-dropdown">
                      <button
                        className="btn-repo-toggle"
                        onClick={() => toggleRepos(project.slug)}
                      >
                        <FolderGit2 size={16} />
                        Repositorios ({project.repositories.length})
                        <span className={`arrow ${expandedRepo === project.slug ? 'open' : ''}`}>
                          ▼
                        </span>
                      </button>
                      
                      {expandedRepo === project.slug && (
                        <div className="repo-list">
                          {project.repositories.map((repo) => (
                            <a
                              key={repo.url}
                              href={repo.url}
                              target="_blank"
                              rel="noreferrer"
                              className="repo-link"
                            >
                              <Github size={14} />
                              {repo.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn primary"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}

                  <Link
                    to={`/projects/${project.slug}`}
                    className="btn secondary"
                  >
                    <ExternalLink size={16} />
                    Ver detalles
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default Home;