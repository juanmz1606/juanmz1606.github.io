import "../styles/projects.css";

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
          <h3>Sistema de Gestión de Restaurante</h3>
          <p>
            Aplicación web para la gestión de pedidos, mesas y productos,
            orientada a mejorar el control y la eficiencia operativa.
          </p>
          <span>React · FastAPI · MySQL</span>

          <div className="project-links">
            <a href="#" className="btn primary">GitHub</a>
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
