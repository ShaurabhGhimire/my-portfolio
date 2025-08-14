// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import neonHead from "../assets/neon-head.png";

export default function NeonAvatar({ size = "md" }) {
  const imgSizes = {
    sm: "w-48 h-48 md:w-64 md:h-64",
    md: "w-64 h-64 md:w-96 md:h-96",
    lg: "w-80 h-80 md:w-[28rem] md:h-[28rem]",
  };
  const glowSizes =
    size === "sm"
      ? "h-64 w-64 md:h-80 md:w-80"
      : size === "lg"
      ? "h-[28rem] w-[28rem]"
      : "h-80 w-80 md:h-[26rem] md:w-[26rem]";

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative mt-10 md:mt-0 grid place-items-center group"
    >
      {/* Hover-only neon glow (very subtle by default) */}
      <div
        aria-hidden="true"
        className={`absolute ${glowSizes} rounded-full blur-[70px]
                    opacity-0 scale-95 transition-all duration-300
                    group-hover:opacity-35 group-hover:scale-105`}
        style={{
          background:
            "radial-gradient(circle, rgba(0,245,212,0.45), transparent 70%)",
        }}
      />

      {/* Image with tiny hover pop + glow only on hover */}
      <motion.img
        src={neonHead}
        alt="Neon head outline"
        className={`${imgSizes[size]} object-contain
                    drop-shadow-[0_0_0_rgba(0,0,0,0)]
                    transition-all duration-300
                    group-hover:drop-shadow-[0_0_22px_rgba(0,245,212,0.35)]`}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
      />
    </motion.div>
  );
}
