// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Projects() {
  const featuredProjects = [
    {
      title: "NASA Space Apps: ExoExplorer",
      description:
        "AI-powered educational tool for exploring exoplanets, blending real NASA data with AI storytelling. Nominated globally after winning the NJ Space Apps Challenge.",
      demoLink: "https://exoexplorer.earth",
      githubLink: "https://github.com/ShaurabhGhimire/exoplanet-explorer.git",
    },
    {
      title: "Accident Hotspot Prediction",
      description:
        "Machine learning project predicting accident hotspots in Nepal using clustering techniques and severity models to improve road safety.",
      demoLink: "https://shaurabhghimire.github.io/honors_project_site/",
      githubLink:
        "https://github.com/ShaurabhGhimire/honors_project_site/blob/main/honors_paper.pdf",
    },
  ];

  const otherProjects = [
    {
      title: "Budget Tracke",
      description:
        "Simple personal finance tracker with expense logging, budget setting, and category-based visual insights. Fully responsive across all devices.",
      link: "https://shaurabhghimire.github.io/FrontEndFinal/",
      github: "https://github.com/ShaurabhGhimire/FrontEndFinal",
    },
    {
      title: "Blog Website",
      description:
        "React + Express blog with structured articles and previews.",
      link: "#",
      github: "https://github.com/ShaurabhGhimire/dailyJournel",
    },
    {
      title: "My First Portfolio",
      description:
        "My first minimalist portfolio designed using only css and html.",
      link: "https://shaurabhghimire.github.io/cssportfolio/",
      github: "https://github.com/ShaurabhGhimire/cssportfolio",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: i * 0.08 },
    }),
  };

  return (
    <section
      id="projects"
      className="relative z-20 flex flex-col items-center py-20 px-8 md:px-20 text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-10 text-center"
      >
        Featured Projects
      </motion.h2>

      {/* Featured grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-7xl w-full">
        {featuredProjects.map((p, i) => (
          <motion.article
            key={p.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className={[
              "group relative rounded-2xl p-7",
              "bg-[#0C1018] border border-white/6",
              "bg-gradient-to-br from-white/[0.02] to-white/[0.01]",
              "shadow-[0_0_0_0_rgba(0,245,212,0),_0_0_0_0_rgba(0,245,212,0)]",
              "hover:shadow-[0_0_26px_3px_rgba(0,245,212,0.28),_0_0_80px_20px_rgba(0,245,212,0.12)]",
              "transition-[transform,box-shadow] duration-300",
            ].join(" ")}
          >
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ boxShadow: "inset 0 0 0 1px rgba(0,245,212,0.35)" }}
            />

            <h3 className="text-2xl md:text-3xl font-semibold mb-3">
              {p.title}
            </h3>
            <p className="text-white/80 leading-relaxed mb-6">
              {p.description}
            </p>

            {/* Buttons: outline by default → fill teal on hover */}
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={p.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full font-semibold border border-[#00F5D4]/60 text-white
                           hover:bg-[#00F5D4] hover:text-[#0E1017]
                           hover:shadow-[0_8px_20px_rgba(0,245,212,0.35)]
                           transition-[background-color,color,box-shadow,transform] duration-200
                           hover:scale-[1.03] active:scale-[0.98]"
              >
                Live Demo
              </a>
              <a
                href={p.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full font-semibold border border-[#00F5D4]/60 text-white
                           hover:bg-[#00F5D4] hover:text-[#0E1017]
                           hover:shadow-[0_8px_20px_rgba(0,245,212,0.35)]
                           transition-[background-color,color,box-shadow,transform] duration-200
                           hover:scale-[1.03] active:scale-[0.98]"
              >
                GitHub
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        Other Projects
      </motion.h2>

      {/* Other projects */}
      <div className="grid md:grid-cols-2 gap-8 max-w-7xl w-full">
        {otherProjects.map((p, i) => (
          <motion.article
            key={p.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.015 }}
            className={[
              "group relative rounded-xl p-6",
              "bg-[#0C1018] border border-white/6",
              "bg-gradient-to-br from-white/[0.02] to-white/[0.01]",
              "shadow-[0_0_0_0_rgba(0,245,212,0),_0_0_0_0_rgba(0,245,212,0)]",
              "hover:shadow-[0_0_20px_2px_rgba(0,245,212,0.25),_0_0_60px_14px_rgba(0,245,212,0.10)]",
              "transition-[transform,box-shadow] duration-300",
            ].join(" ")}
          >
            <div
              className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ boxShadow: "inset 0 0 0 1px rgba(0,245,212,0.30)" }}
            />

            <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
            <p className="text-white/80 mb-4">{p.description}</p>

            {/* Buttons: outline by default → fill teal on hover */}
            <div className="flex gap-3">
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm rounded-full font-medium border border-[#00F5D4]/60 text-white
                           hover:bg-[#00F5D4] hover:text-[#0E1017]
                           hover:shadow-[0_8px_20px_rgba(0,245,212,0.35)]
                           transition-[background-color,color,box-shadow,transform] duration-200
                           hover:scale-[1.03] active:scale-[0.98]"
              >
                Demo
              </a>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm rounded-full font-medium border border-[#00F5D4]/60 text-white
                           hover:bg-[#00F5D4] hover:text-[#0E1017]
                           hover:shadow-[0_8px_20px_rgba(0,245,212,0.35)]
                           transition-[background-color,color,box-shadow,transform] duration-200
                           hover:scale-[1.03] active:scale-[0.98]"
              >
                GitHub
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
