/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const skills = [
  "React.js",
  "Node.js",
  "Express.js",
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "MongoDB",
  "SQL",
  "Git",
  "Linux",
  "Python",
  "Java"
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen px-8 md:px-20 py-16 bg-[#1E1E2F] text-white flex flex-col justify-center items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-10"
      >
        Skills
      </motion.h2>

      {/* Bubble container */}
      <div className="flex flex-wrap justify-center gap-6 max-w-5xl">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            className="rounded-full px-6 py-4 bg-gradient-to-br from-[#9D4EDD] via-[#5A189A] to-[#00F5D4] text-white font-semibold text-lg shadow-lg hover:scale-105 transition-transform"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
