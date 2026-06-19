"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 text-white pt-24"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 font-medium uppercase tracking-wider text-cyan-400">
              Welcome To My Portfolio
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Hi, I'm <span className="text-cyan-400">Sohaib Ahmad</span>
            </h1>

            <h2 className="mt-4 text-2xl font-semibold text-slate-300 md:text-3xl">
              Full Stack Web Developer
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              I build modern, scalable, and high-performance web applications
              using React, Next.js, Tailwind CSS, JavaScript, Node.js, Nest.js,
              TypeScript, PostgreSQL, and Prisma.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-lg bg-cyan-500 px-7 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-cyan-600"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-lg border border-cyan-400 px-7 py-3 font-medium text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-slate-950"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition hover:text-cyan-400"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/sohaib-ahmad-60b652353?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition hover:text-cyan-400"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl"></div>

              <div className="relative overflow-hidden rounded-full border-4 border-cyan-400 shadow-2xl shadow-cyan-500/20">
                <Image
                  src="/images/profile.jpg"
                  alt="Sohaib Ahmad"
                  width={380}
                  height={380}
                  priority
                  className="h-[320px] w-[320px] object-cover md:h-[380px] md:w-[380px]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
