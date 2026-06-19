"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    title: "Software Engineering",
    description:
      "Building a strong foundation in programming, software architecture, databases, object-oriented design, and problem-solving.",
  },
  {
    title: "Frontend Development",
    description:
      "Developing responsive and modern user interfaces using React.js, Next.js, Tailwind CSS, and JavaScript.",
  },
  {
    title: "Full Stack Development",
    description:
      "Building complete web applications using Node.js, Nest.js, PostgreSQL, Prisma, APIs, authentication, and scalable architectures.",
  },
];

const Education = () => {
  return (
    <section id="education" className="bg-slate-950 py-24 text-white">
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
            Education & Experience
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">My Journey</h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-cyan-400"></div>
        </motion.div>
        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:border-cyan-400 hover:-translate-y-2"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/20 text-2xl">
                🎓
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Bachelor of Software Engineering
                </h3>

                <p className="text-cyan-400">University Student</p>
              </div>
            </div>

            <p className="leading-relaxed text-slate-300">
              Currently pursuing a Bachelor's degree in Software Engineering
              with a focus on software development, databases, system design,
              software architecture, and modern engineering practices.
            </p>

            <span className="mt-6 inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-cyan-400">
              Ongoing
            </span>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:border-cyan-400 hover:-translate-y-2"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/20 text-2xl">
                💻
              </div>

              <div>
                <h3 className="text-2xl font-bold">Full Stack Development</h3>

                <p className="text-cyan-400">Internship & Self Learning</p>
              </div>
            </div>

            <p className="leading-relaxed text-slate-300">
              Building full-stack web applications using React.js, Next.js,
              Node.js, Nest.js, PostgreSQL, Prisma, JavaScript, and TypeScript
              while following modern development standards and best practices.
            </p>

            <span className="mt-6 inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-cyan-400">
              Current
            </span>
          </motion.div>
        </div>
        {/* Timeline */}
        <div className="mt-24">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-3xl font-bold"
          >
            Learning Timeline
          </motion.h3>

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:border-cyan-400"
              >
                <h4 className="text-xl font-semibold text-cyan-400">
                  {item.title}
                </h4>

                <p className="mt-2 text-slate-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
