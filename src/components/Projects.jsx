/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-8 md:px-20 py-16 bg-[#1E1E2F] text-white">

      {/* Featured Project */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Featured Project</h2>
        <div className="bg-gradient-to-br from-[#9D4EDD] to-[#00F5D4] rounded-xl p-8 shadow-lg flex flex-col md:flex-row items-center">
          <div className="flex-1 mb-6 md:mb-0">
            <h3 className="text-3xl font-semibold mb-3">NASA Space Apps: ExoExplorer 🚀</h3>
            <p className="mb-4 text-lg leading-relaxed">
              AI-powered educational tool for exploring exoplanets, blending real NASA data with AI storytelling. 
              Nominated globally after winning the NJ Space Apps Challenge.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#" className="px-5 py-2 bg-[#00F5D4] text-[#1E1E2F] rounded-full font-semibold hover:scale-105 transition">Live Demo</a>
              <a href="#" className="px-5 py-2 border-2 border-[#00F5D4] rounded-full font-semibold hover:scale-105 transition">GitHub</a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-60 h-60 rounded-full bg-gradient-to-br from-[#00F5D4] via-[#9D4EDD] to-[#5A189A] shadow-2xl"></div>
          </div>
        </div>
      </motion.div>

      {/* Grid Projects */}
      <h2 className="text-3xl font-bold mb-8 text-center">Other Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">

        {/* Example Card */}
        {[
          {
            title: "Blog Website",
            description: "React + Express blog with structured articles and previews.",
            link: "#",
            github: "#"
          },
          {
            title: "Google Keep Clone",
            description: "Minimalist note-keeping app built with React and MongoDB.",
            link: "#",
            github: "#"
          }
        ].map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className="bg-[#2A2A3B] rounded-xl p-6 shadow-md hover:scale-[1.02] transition cursor-pointer"
          >
            <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <div className="flex gap-4">
              <a href={project.link} className="px-4 py-2 text-sm bg-[#00F5D4] text-[#1E1E2F] rounded-full font-medium">Demo</a>
              <a href={project.github} className="px-4 py-2 text-sm border border-[#00F5D4] rounded-full font-medium">GitHub</a>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
