"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 90 },
  { name: "React.js", level: 88 },
  { name: "Next.js", level: 85 },
  { name: "Tailwind CSS", level: 92 },
  { name: "Node.js", level: 80 },
  { name: "Nest.js", level: 75 },
  { name: "TypeScript", level: 78 },
  { name: "PostgreSQL", level: 75 },
  { name: "Prisma", level: 72 },
  { name: "Git & GitHub", level: 85 },
];

const stats = [
  { number: "12+", title: "Technologies" },
  { number: "5+", title: "Projects Built" },
  { number: "1+", title: "Years Learning" },
  { number: "100%", title: "Dedication" },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-slate-950 py-24 text-white">
      {" "}
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        ```
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="font-semibold uppercase tracking-[4px] text-cyan-400">
            My Skills
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Technologies I Work With
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-cyan-400"></div>
        </motion.div>
        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:border-cyan-400"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-semibold">{skill.name}</h3>

                <span className="font-semibold text-cyan-400">
                  {skill.level}%
                </span>
              </div>

              <div className="h-3 w-full overflow-hidden rounded-full bg-slate-700">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="h-3 rounded-full bg-cyan-400"
                />
              </div>
            </motion.div>
          ))}
        </div>
        {/* Stats */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400"
            >
              <h3 className="text-4xl font-bold text-cyan-400">
                {item.number}
              </h3>

              <p className="mt-2 text-slate-300">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
