/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-20 bg-[#1E1E2F] text-white"
    >
      {/* Left Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
        <p className="text-lg mb-6 max-w-xl leading-relaxed mx-auto md:mx-0">
          I’m Saurav, a creative frontend developer passionate about designing modern, animated, and interactive web experiences. My approach focuses on minimal yet impactful design, merging clean layouts with subtle animations that make websites engaging and enjoyable to use.
        </p>
        <a
          href="#projects"
          className="inline-block px-6 py-3 bg-[#00F5D4] text-[#1E1E2F] font-semibold rounded-full hover:scale-105 transition-transform"
        >
          View Projects 🚀
        </a>
      </motion.div>

      {/* Right Visual Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center items-center mt-10 md:mt-0"
      >
        <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-[#9D4EDD] via-[#5A189A] to-[#00F5D4] animate-gradient shadow-2xl"></div>
      </motion.div>
    </section>
  );
}
