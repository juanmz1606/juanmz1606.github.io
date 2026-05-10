interface Props {
  tech: string;
  variant?: "card" | "pill";
}

const TechTag: React.FC<Props> = ({ tech, variant = "card" }) => {
  if (variant === "pill") {
    return <span className="tech-tag-pill">{tech}</span>;
  }
  return <span className="tech-tag">{tech}</span>;
};

export default TechTag;