/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 
      text-white bg-gradient-to-r from-[#9D4EDD] via-[#5A189A] to-[#00F5D4] 
      bg-[length:200%_200%] animate-gradient">

      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl font-bold mb-4"
      >
        <span className="animate-shimmer bg-gradient-to-r from-[#00F5D4] to-[#9D4EDD] bg-clip-text text-transparent">
          Saurav
        </span>
      </motion.h1>

      <p className="text-xl md:text-2xl mb-10 bg-gradient-to-r from-[#00F5D4] to-[#9D4EDD] bg-clip-text text-transparent animate-shimmer">
        Creative Frontend Developer
      </p>

      <motion.a
        href="#projects"
        whileHover={{ scale: 1.05 }}
        className="px-8 py-3 rounded-full bg-[#00F5D4] text-[#1E1E2F] font-bold text-lg shadow-lg hover:shadow-[#00F5D4]/50 transition-all"
      >
        View Work 🚀
      </motion.a>
    </section>
  );
}
