// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaJava, FaPython, FaReact, FaNodeJs, FaHtml5, FaCss3Alt,
  FaAndroid, FaGitAlt, FaLinux, FaAws
} from "react-icons/fa";
import {
  SiJavascript, SiTypescript, SiTailwindcss, SiExpress,
  SiMongodb, SiMysql
} from "react-icons/si";

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Java", icon: <FaJava size={40} color="#ED8B00" /> },
      { name: "Python", icon: <FaPython size={40} color="#3776AB" /> },
      { name: "JavaScript", icon: <SiJavascript size={40} color="#F7DF1E" /> },
      { name: "TypeScript", icon: <SiTypescript size={40} color="#3178C6" /> },
    ],
  },
  {
    category: "Web Development",
    items: [
      { name: "React.js", icon: <FaReact size={40} color="#61DBFB" /> },
      { name: "Node.js", icon: <FaNodeJs size={40} color="#3C873A" /> },
      { name: "Express.js", icon: <SiExpress size={40} color="#fff" /> },
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

    <section id="skills" className="py-20 px-6 md:px-20 bg-[#1E1E2F] text-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-16 text-center"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {skills.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-[#2A2A3B] rounded-xl shadow-lg p-6 flex flex-col hover:scale-[1.02] hover:shadow-2xl transition-transform"
          >
            <h3 className="text-2xl font-semibold mb-4 text-center">{group.category}</h3>
            <div className="grid grid-cols-2 gap-4">
              {group.items.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-2 bg-[#1E1E2F] rounded-lg p-4 hover:bg-[#38384d] transition-colors"
                >
                  {skill.icon}
                  <p className="text-sm">{skill.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
