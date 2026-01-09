import "../styles/projects.css";
import { Link } from "react-router-dom";

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <h2>Proyectos</h2>

      <div className="projects-grid">
        <div className="project-card">
          <h3>Sistema de Gestión de Cementerios</h3>
          <p>
            Plataforma web para la administración de nichos, cuerpos inhumados
            y generación de reportes, desarrollada bajo una arquitectura de
            microservicios.
          </p>
          <span>React · Spring Boot · MySQL · Docker</span>

          <div className="project-links">
            <a href="#" className="btn primary">GitHub</a>
          </div>
        </div>

        <div className="project-card">
          <h3>Restaurant Management System</h3>
          <p>
            Sistema de gestión para restaurantes con control de stock,
            recetas, empleados y órdenes.
          </p>
          <span>NestJS · MongoDB · React · Docker</span>

          <div className="project-links">
            <a
              href="https://github.com/juanmz1606/restaurant-management-system"
              target="_blank"
              className="btn primary"
            >
              GitHub
            </a>

            <Link to="/projects/restaurant-management" className="btn secondary">
              Ver detalles
            </Link>
          </div>
        </div>


        <div className="project-card">
          <h3>Proyecto Full Stack Académico</h3>
          <p>
            Desarrollo de aplicaciones web full stack con enfoque en buenas
            prácticas, APIs REST y arquitectura modular.
          </p>
          <span>Java · Python · React</span>

          <div className="project-links">
            <a href="#" className="btn primary">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
