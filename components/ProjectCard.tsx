import { Project } from "@/data/projects";
 
type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="border rounded-lg p-6 hover:shadow-md transition">
      <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 bg-gray-100 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium hover:underline"
        >
          View Project →
        </a>
      )}
    </div>
  );
}
