import "../styles/home.css";

const Home: React.FC = () => {
  return (
    <section className="home">
      <div className="home-container">
        <h1>Juan Esteban Meza Buitrago</h1>

        <h2>Ingeniero en Sistemas y Computación</h2>

        <p>
          Ingeniero en Sistemas y Computación, con interés en el desarrollo de
          software y la construcción de aplicaciones robustas y mantenibles.
          Experiencia en desarrollo backend, pruebas de APIs, automatización y
          proyectos académicos full stack, aplicando buenas prácticas de diseño
          y arquitectura de software.
        </p>

        <p>
          Motivado por el aprendizaje continuo y el trabajo en equipo, con
          especial interés en soluciones escalables y de calidad.
        </p>

        <div className="home-buttons">
          <a
            href="https://www.linkedin.com/in/juanmeza-sistemas"
            target="_blank"
            rel="noreferrer"
            className="btn primary"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/juanmz1606"
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            GitHub
          </a>
        </div>

        <p style={{ marginTop: "1.8rem", color: "#475569" }}>
          📧{" "}
          <a
            href="mailto:juanestebanmz79@gmail.com"
            style={{ color: "#2563eb", textDecoration: "none" }}
          >
            juanestebanmz79@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Home;
