"use client";

import { motion } from "framer-motion";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Bhatti1822",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    name: "Email",
    href: "mailto:your-email@gmail.com",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      {" "}
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-14">
        ```
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold">
              Sohaib
              <span className="text-cyan-400">.</span>
            </h2>

            <p className="mt-4 leading-relaxed text-slate-400">
              Full Stack Developer passionate about building scalable, modern,
              and user-friendly web applications.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-xl font-semibold">Quick Links</h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 transition hover:text-cyan-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-xl font-semibold">Connect With Me</h3>

            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-slate-400 transition hover:text-cyan-400"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
        {/* Bottom */}
        <div className="mt-10 border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {currentYear} Sohaib Ahmad. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="rounded-full border border-cyan-400 px-4 py-2 text-sm text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            Back To Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
