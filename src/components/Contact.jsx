"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const contactInfo = [
  {
    title: "Email",
    value: "sohaibahmad.dev@gmail.com",
    icon: "📧",
  },
  {
    title: "Phone",
    value: "+92 316 6073020",
    icon: "📱",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/sohaib-ahmad-60b652353",
    icon: "💼",
  },
  {
    title: "GitHub",
    value: "https://github.com/Sohaib-Ahmad786",
    icon: "💻",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");

    try {
      await emailjs.send(
        "service_7c8xvs8",
        "template_h9varc9",
        formData,
        "LejXMRYLyuzaiZm3S",
      );

      setSuccess("✅ Message sent successfully!");

      setFormData({
        user_name: "",
        user_email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setSuccess("❌ Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="bg-slate-900 py-24 text-white">
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
            Contact Me
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Let's Work Together
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-cyan-400"></div>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Open to internships, freelance opportunities, collaborations, and
            full stack development projects.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition-all duration-300 hover:border-cyan-400 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{item.icon}</span>

                  <div>
                    <h3 className="font-semibold">{item.title}</h3>

                    <p className="break-all text-slate-400">{item.value}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">
              <h3 className="mb-2 text-xl font-bold text-cyan-400">
                Full Stack Developer
              </h3>

              <p className="text-slate-300">
                Building scalable web applications using React.js, Next.js,
                Node.js, Nest.js, PostgreSQL, Prisma, and TypeScript.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-800 bg-slate-950 p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-slate-300">Full Name</label>

                <input
                  type="text"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none transition focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-slate-300">
                  Email Address
                </label>

                <input
                  type="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none transition focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-slate-300">Subject</label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project discussion"
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none transition focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-slate-300">Message</label>

                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full resize-none rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none transition focus:border-cyan-400"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-cyan-500 py-3 font-semibold text-white transition-all duration-300 hover:bg-cyan-600 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="text-center text-green-400">{success}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
