"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="font-semibold uppercase tracking-[4px] text-cyan-400">
            My Work
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Featured Projects
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-cyan-400"></div>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Real-world projects built with modern technologies, clean
            architecture, and responsive user experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-stretch">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 transition-all duration-300 hover:-translate-y-3 hover:border-cyan-400"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/20"></div>

                {project.featured && (
                  <span className="absolute right-4 top-4 rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-white">
                    Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-grow flex-col p-6">
                <h3 className="mb-3 text-2xl font-bold">{project.title}</h3>

                <p className="mb-5 leading-relaxed text-slate-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-auto flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-lg border border-cyan-400 py-2 text-center font-medium text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-slate-950"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-lg bg-cyan-500 py-2 text-center font-medium text-white transition-all duration-300 hover:bg-cyan-600"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-block rounded-lg bg-cyan-500 px-8 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-cyan-600"
          >
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
