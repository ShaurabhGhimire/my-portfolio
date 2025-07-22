// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Projects() {
  const featuredProjects = [
    {
      title: "NASA Space Apps: ExoExplorer 🚀",
      description:
        "AI-powered educational tool for exploring exoplanets, blending real NASA data with AI storytelling. Nominated globally after winning the NJ Space Apps Challenge.",
      gradient: "from-[#9D4EDD] to-[#00F5D4]",
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Accident Hotspot Prediction 🛣️",
      description:
        "Machine Learning project predicting accident hotspots in Nepal using clustering techniques and severity models to improve road safety.",
      gradient: "from-[#00F5D4] to-[#5A189A]",
      demoLink: "#",
      githubLink: "#",
    },
  ];

  const otherProjects = [
    {
      title: "Blog Website",
      description: "React + Express blog with structured articles and previews.",
      link: "#",
      github: "#",
    },
    {
      title: "Google Keep Clone",
      description: "Minimalist note-keeping app built with React and MongoDB.",
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="min-h-screen px-8 md:px-20 py-16 bg-[#1E1E2F] text-white">

      {/* Featured Projects */}
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        {featuredProjects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className={`bg-gradient-to-br ${project.gradient} rounded-xl p-8 shadow-lg flex flex-col justify-between`}
          >
            <div>
              <h3 className="text-3xl font-semibold mb-4">{project.title}</h3>
              <p className="text-lg mb-6">{project.description}</p>
            </div>
            <div className="flex gap-4 mt-auto">
              <a href={project.demoLink} className="px-5 py-2 bg-[#1E1E2F] text-white rounded-full font-semibold hover:scale-105 transition">Live Demo</a>
              <a href={project.githubLink} className="px-5 py-2 border-2 border-white rounded-full font-semibold hover:scale-105 transition">GitHub</a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Other Projects */}
      <h2 className="text-3xl font-bold mb-8 text-center">Other Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {otherProjects.map((project, index) => (
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
