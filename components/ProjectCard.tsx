// components/ProjectCard.tsx
type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border rounded-lg p-5 bg-gray-200 shadow hover:shadow-md transition">
      <h3 className="text-xl text-black font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-700 mb-3">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded"
          >
            {t}
          </span>
        ))}
      </div>
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        View on GitHub →
      </a>
    </div>
  );
}
