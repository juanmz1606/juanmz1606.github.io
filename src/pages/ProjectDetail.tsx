import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

const ProjectDetail: React.FC = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <p>Proyecto no encontrado</p>;
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <Link to="/projects" className="text-blue-500">
        ← Volver a proyectos
      </Link>

      <h1 className="text-3xl font-bold mt-4">{project.title}</h1>
      <p className="mt-4 text-gray-300">{project.description}</p>

      <h2 className="text-xl font-semibold mt-6">Funcionalidades</h2>
      <ul className="list-disc list-inside mt-2 space-y-1">
        {project.features.map(f => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6">Tecnologías</h2>
      <div className="flex flex-wrap gap-2 mt-2">
        {project.stack.map(t => (
          <span
            key={t}
            className="px-3 py-1 bg-gray-800 rounded-full text-sm"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6">
        <a
          href={project.github}
          target="_blank"
          className="btn primary"
        >
          Ver repositorio en GitHub
        </a>
      </div>
    </section>
  );
};

export default ProjectDetail;
