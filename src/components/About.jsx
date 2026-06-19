"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "10+",
    title: "Technologies",
  },
  {
    number: "5+",
    title: "Projects",
  },
  {
    number: "1+",
    title: "Years Learning",
  },
  {
    number: "100%",
    title: "Dedication",
  },
];

const About = () => {
  return (
    <section id="about" className="bg-slate-900 py-24 text-white">
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
            About Me
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Get To Know Me
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-cyan-400"></div>
        </motion.div>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-3xl font-bold">Who Am I?</h3>

            <p className="mb-5 leading-relaxed text-slate-300">
              My name is{" "}
              <span className="font-semibold text-cyan-400">Sohaib Ahmad</span>.
              I am a passionate Full Stack Web Developer focused on building
              modern, scalable, and user-friendly web applications.
            </p>

            <p className="mb-5 leading-relaxed text-slate-300">
              My primary technologies include React.js, Next.js, JavaScript,
              Tailwind CSS, Node.js, Nest.js, TypeScript, PostgreSQL, and
              Prisma.
            </p>

            <p className="leading-relaxed text-slate-300">
              I enjoy solving real-world problems, learning modern software
              engineering practices, and creating professional digital
              experiences that provide value to users.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-block rounded-lg bg-cyan-500 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-cyan-600"
            >
              Let's Connect
            </a>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-800 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400"
              >
                <h4 className="text-4xl font-bold text-cyan-400">
                  {item.number}
                </h4>

                <p className="mt-3 text-slate-300">{item.title}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
