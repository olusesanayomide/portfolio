'use client';

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);
  const techStack = ["Next.js", "TypeScript", "Nest.js", "PostgreSQL"];

  return (
    <main className="mx-auto max-w-6xl px-6">
      <motion.section
        id="hero"
        className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Hi, I&apos;m Ayomide Olusesan</h1>
        <p className="mb-6 max-w-2xl text-lg text-gray-600 md:text-xl">
          Final-year Software Engineering student building secure and scalable full-stack web
          applications.
        </p>

        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
          }}
        >
          {techStack.map((tech) => (
            <motion.span
              key={tech}
              className="rounded-full border border-white/70 bg-white/70 px-3 py-1 text-sm font-medium text-gray-800 shadow-[0_8px_18px_-14px_rgba(17,24,39,0.8)] backdrop-blur-sm"
              variants={fadeInUp}
              whileHover={{
                y: -3,
                scale: 1.06,
                boxShadow: "0 14px 24px -14px rgba(17,24,39,0.9)",
                backgroundColor: "rgba(255,255,255,0.95)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 320, damping: 18 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.section>

      <section id="projects" className="py-24">
        <motion.h2
          className="mb-8 text-2xl font-semibold"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          Projects
        </motion.h2>
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
        >
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </section>

      <motion.section
        className="py-12 text-center text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Interested in working together? <br /> Reach me via the links below
      </motion.section>
    </main>
  );
}
