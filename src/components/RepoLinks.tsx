import { Github } from "lucide-react";
import type { Project } from "../data/projects";

interface Props {
  project: Pick<Project, "github" | "repositories">;
  variant: "button" | "links";
}

const RepoLinks: React.FC<Props> = ({ project, variant }) => {
  if (variant === "button") {
    // Versión Home — botón oscuro o dropdown
    if (project.repositories) {
      return null; // El dropdown lo maneja Home con su estado local
    }
    return project.github ? (
      <a href={project.github} target="_blank" rel="noreferrer" className="btn primary">
        <Github size={16} />
        GitHub
      </a>
    ) : null;
  }

  // Versión ProjectDetail — lista de links
  return (
    <>
      {project.repositories ? (
        project.repositories.map((repo) => (
          <a key={repo.url} href={repo.url} target="_blank" rel="noreferrer" className="res-link">
            <Github size={16} />
            {repo.name}
          </a>
        ))
      ) : project.github ? (
        <a href={project.github} target="_blank" rel="noreferrer" className="res-link">
          <Github size={16} />
          Repositorio GitHub
        </a>
      ) : null}
    </>
  );
};

export default RepoLinks;