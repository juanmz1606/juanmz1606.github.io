import "../styles/home.css";

const Home: React.FC = () => {
  return (
    <section className="home">
      <div className="home-container">
        <h1>Juan Esteban Meza Buitrago</h1>

        <h2>Ingeniero en Sistemas y Computación</h2>

        <p>
          Interesado en el desarrollo de software y la calidad de aplicaciones.
          Experiencia en pruebas de APIs, automatización, desarrollo backend y
          proyectos académicos full stack.
        </p>

        <div className="home-buttons">
          <a
            href="https://www.linkedin.com"
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

          <a href="mailto:juanestebanmz79@gmail.com" className="btn outline">
            Contacto
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
