'use client'

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import {motion} from 'framer-motion';

const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, };
export default function HomePage() {
  return (
    
    <main className="max-w-6xl mx-auto px-6">
 
<motion.section
  id="hero"
  className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <h1 className="text-4xl md:text-5xl font-bold mb-4">
    Hi, I’m Ayomide Olusesan
  </h1>
  <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-6">
    Final-year Software Engineering student building secure and scalable full-stack web applications.
  </p>

  <div className="flex flex-wrap gap-4 justify-center">
    <span className="bg-gray-100 px-3 py-1 rounded">Next.js</span>
    <span className="bg-gray-100 px-3 py-1 rounded">TypeScript</span>
    <span className="bg-gray-100 px-3 py-1 rounded">ASP.NET Core</span>
    <span className="bg-gray-100 px-3 py-1 rounded">PostgreSQL</span>
  </div>

  
</motion.section>



<section id="projects" className="py-24"> 
  <motion.h2 className="text-2xl font-semibold mb-8" 
  variants={fadeInUp} initial="hidden" animate="visible" >
     Projects </motion.h2> 
     <motion.div className="grid gap-6 md:grid-cols-2" variants={fadeInUp} initial="hidden" whileInView="visible" >
       {projects.map((project) => ( <ProjectCard key={project.title} project={project} /> ))}
        </motion.div> </section>

 


<motion.section
  className="py-12 text-center text-gray-700"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  Interested in working together? Reach me via the links below 
</motion.section>

    </main>
  );
}
