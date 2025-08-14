// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaJava, FaPython, FaReact, FaNodeJs, FaHtml5, FaCss3Alt,
  FaAndroid, FaGitAlt, FaLinux, FaAws
} from "react-icons/fa";
import {
  SiJavascript, SiTypescript, SiTailwindcss, SiExpress,
  SiMongodb, SiMysql, SiAngular, SiNextdotjs,SiCplusplus
} from "react-icons/si";

// subtle embossed (neumorphic) inset shadows
const EMBOSSED = "inset 2px 2px 6px rgba(0,0,0,.55), inset -2px -2px 6px rgba(255,255,255,.035)";

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Java", icon: <FaJava size={40} color="#ED8B00" /> },
      { name: "Python", icon: <FaPython size={40} color="#3776AB" /> },
       { name: "C/C++", icon: <SiCplusplus size={40} color="#00599C" /> },
      { name: "JavaScript", icon: <SiJavascript size={40} color="#F7DF1E" /> },
      { name: "TypeScript", icon: <SiTypescript size={40} color="#3178C6" /> },
    ],
  },
  {
    category: "Web Development",
    items: [
      { name: "React.js", icon: <FaReact size={40} color="#61DBFB" /> },
      { name: "Angular", icon: <SiAngular size={40} color="#DD0031" /> },     // NEW
      { name: "Next.js", icon: <SiNextdotjs size={40} color="#ffffff" /> },   // NEW
      { name: "Node.js", icon: <FaNodeJs size={40} color="#3C873A" /> },
      { name: "Express.js", icon: <SiExpress size={40} color="#ffffff" /> },
      { name: "HTML5", icon: <FaHtml5 size={40} color="#E34F26" /> },
      { name: "CSS3", icon: <FaCss3Alt size={40} color="#1572B6" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss size={40} color="#38BDF8" /> },
    ],
  },
  {
    category: "Android Development",
    items: [
      { name: "Java", icon: <FaJava size={40} color="#ED8B00" /> },
      { name: "Android Studio", icon: <FaAndroid size={40} color="#3DDC84" /> },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" /> },
      { name: "SQL", icon: <SiMysql size={40} color="#00758F" /> },
    ],
  },
  {
    category: "Cloud",
    items: [
      { name: "AWS", icon: <FaAws size={40} color="#FF9900" /> },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git", icon: <FaGitAlt size={40} color="#F05032" /> },
      { name: "Linux", icon: <FaLinux size={40} color="#FCC624" /> },
    ],
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative z-20 py-20 px-6 md:px-20 text-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-16 text-center"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {skills.map((group, idx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.06 }}
            className={[
              "group relative rounded-2xl p-6",
              // Match Projects styling: deep neutral surface + subtle sheen
              "bg-[#0C1018] border border-white/6",
              "bg-gradient-to-br from-white/[0.02] to-white/[0.01]",
              "transition-[transform,box-shadow] duration-300",
              // Neon halo on hover (same recipe as Projects)
              "shadow-[0_0_0_0_rgba(0,245,212,0),_0_0_0_0_rgba(0,245,212,0)]",
              "hover:shadow-[0_0_20px_2px_rgba(0,245,212,0.22),_0_0_60px_14px_rgba(0,245,212,0.10)]",
              "hover:scale-[1.01]"
            ].join(" ")}
          >
            {/* Thin neon edge on hover */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ boxShadow: "inset 0 0 0 1px rgba(0,245,212,0.28)" }}
            />

            <h3 className="text-2xl font-semibold mb-4 text-center">{group.category}</h3>

            <div className="grid grid-cols-2 gap-4">
              {group.items.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center gap-2 rounded-lg p-4
                             bg-[#0C1018] border border-white/5
                             transition-all duration-200
                             hover:bg-white/[0.03]"
                  style={{ boxShadow: EMBOSSED }}
                >
                  <div className="opacity-90 group-hover:opacity-100 transition-opacity">{skill.icon}</div>
                  <p className="text-sm text-center text-white/85">{skill.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
