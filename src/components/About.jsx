// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import NeonAvatar from "./NeonAvatar";

const container = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const NEON = "#00F5D4";

export default function About() {
  return (
    <section
      id="about"
      role="region"
      aria-labelledby="about-title"
      className="relative z-20 min-h-[90vh] grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 md:px-12 lg:px-20 py-20 text-white"
    >
      {/* Left: Text */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-xl md:max-w-2xl md:pr-6"
      >
        <motion.h1
          id="about-title"
          variants={item}
          className="text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight"
        >
          I’m{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00F5D4] via-[#6FFFE9] to-[#00F5D4] drop-shadow-[0_0_18px_rgba(0,245,212,0.35)]">
            Saurav
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-5 text-lg md:text-xl text-white/80 leading-relaxed"
        >
          I craft clean, fast, and beautiful web experiences. Minimal look.
          Smooth motion. Code that works hard behind the scenes.
        </motion.p>

        <motion.ul className="mt-6 space-y-3 text-white/70" variants={item}>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#00F5D4]" />
            <span>Performance-first, component-driven architecture.</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#00F5D4]" />
            <span>Interfaces that feel natural and respond instantly.</span>
          </li>
        </motion.ul>

        {/* Buttons with neon + neumorphic hover */}
        <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full px-6 py-3 font-semibold text-[#0E1017] transition-all duration-300"
            style={{
              background: NEON,
              boxShadow:
                "0 6px 14px rgba(0,0,0,0.45), 0 0 16px rgba(0,245,212,0.3)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 8px 20px rgba(0,0,0,0.5), 0 0 26px rgba(0,245,212,0.4)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 6px 14px rgba(0,0,0,0.45), 0 0 16px rgba(0,245,212,0.3)")
            }
          >
            Hire me
          </a>

          <a
            href="./public/Saurav_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full px-6 py-3 font-semibold transition-all duration-300 border border-white/15 bg-white/5 backdrop-blur-sm text-white/90"
            style={{
              boxShadow:
                "inset 2px 2px 6px rgba(0,0,0,0.5), inset -2px -2px 6px rgba(255,255,255,0.05)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.border = `1px solid ${NEON}`;
              e.currentTarget.style.boxShadow =
                "0 0 14px rgba(0,245,212,0.4), inset 0 0 8px rgba(0,245,212,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.border = "1px solid rgba(255,255,255,0.15)";
              e.currentTarget.style.boxShadow =
                "inset 2px 2px 6px rgba(0,0,0,0.5), inset -2px -2px 6px rgba(255,255,255,0.05)";
            }}
          >
            View résumé
          </a>
        </motion.div>
      </motion.div>

      {/* Right: Visual */}
      <motion.div
        initial={{ opacity: 0, x: 24, rotate: -1 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative grid place-items-center"
      >
        <NeonAvatar size="md" />
      </motion.div>
    </section>
  );
}
