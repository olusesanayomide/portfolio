"use client";

import { Project } from "@/data/projects";
import { motion } from "framer-motion";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <motion.article
      className="group rounded-2xl border border-white/65 bg-white/78 p-5 shadow-[0_10px_24px_-18px_rgba(17,24,39,0.75)] backdrop-blur-sm transition-colors sm:p-6"
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
    >
      <h3 className="mb-2 text-lg font-semibold text-gray-900">{project.title}</h3>
      <p className="mb-4 text-sm leading-6 text-gray-700 sm:text-base">{project.description}</p>

      <div className="mb-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-gray-300/70 bg-gray-50 px-2.5 py-1 text-xs text-gray-700"
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
          className="inline-flex items-center rounded-full bg-black px-3.5 py-1.5 text-sm font-medium text-white transition group-hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black/45"
        >
          View Project 
        </a>
      )}
    </motion.article>
  );
}
