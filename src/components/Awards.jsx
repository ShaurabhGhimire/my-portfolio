// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Awards() {
  const awards = [
    {
      title: "🏆 NASA Space Apps Winner",
      description:
        "New Jersey Local Winner & Global Nominee at NASA Space Apps Challenge for ExoExplorer AI project.",
      year: "2024",
    },
    {
      title: "🥇 Best Data Visualization Award",
      description:
        "Awarded by the American Statistical Association at DataFest 2023 for best data storytelling and visualization using Python and Excel.",
      year: "2023",
    },
  ];

  return (
    <section
      id="awards"
      className="relative z-20 min-h-screen py-20 px-8 md:px-20 text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-16 text-center"
      >
        Awards & Recognition
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {awards.map((award, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={[
              "rounded-2xl p-6",
              "bg-[#0B0F17] border border-white/10",
              "bg-gradient-to-br from-white/[0.04] to-white/[0.015]",
              // idle neon halo (subtle)
              "shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_16px_2px_rgba(0,245,212,0.16),_0_0_50px_10px_rgba(0,245,212,0.06)]",
              "transition-all duration-300",
              // pop on hover
              "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_12px_28px_rgba(0,0,0,.45),_0_0_26px_3px_rgba(0,245,212,0.26),_0_0_80px_20px_rgba(0,245,212,0.10)]",
              "hover:scale-[1.02] hover:-translate-y-[3px]"
            ].join(" ")}
          >
            <h3 className="text-2xl font-semibold mb-3">{award.title}</h3>
            <p className="text-base text-white/85 mb-4">{award.description}</p>
            <p className="text-sm text-[#00F5D4] font-semibold">{award.year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
