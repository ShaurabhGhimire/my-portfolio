// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (

    <section id="contact" className="py-20 px-8 md:px-20 bg-[#1E1E2F] text-white flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-10 text-center"
      >
        Contact Me
      </motion.h2>

      <p className="text-center max-w-xl mb-8 text-lg leading-relaxed">
        Interested in collaborating or hiring me? Feel free to reach out through the form or connect via LinkedIn and GitHub.
      </p>

      {/* Contact Icons */}
      <div className="flex gap-8 mb-12">
        <a href="https://github.com/ShaurabhGhimire" target="_blank" rel="noopener noreferrer">
          <FaGithub size={40} className="hover:scale-110 transition" />
        </a>
        <a href="https://linkedin.com/in/shaurabhghimire" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} className="hover:scale-110 transition" />
        </a>
        <a href="mailto:sauravghimire2003@gmail.com">
          <FaEnvelope size={40} className="hover:scale-110 transition" />
        </a>
      </div>

      {/* Contact Form */}
      <form className="w-full max-w-2xl flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-4 rounded-md bg-[#2A2A3B] outline-none focus:ring-2 focus:ring-[#00F5D4]"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-4 rounded-md bg-[#2A2A3B] outline-none focus:ring-2 focus:ring-[#00F5D4]"
          required
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="p-4 rounded-md bg-[#2A2A3B] outline-none focus:ring-2 focus:ring-[#00F5D4]"
          required
        />
        <button
          type="submit"
          className="bg-[#00F5D4] text-[#1E1E2F] font-bold py-3 rounded-md hover:scale-105 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  
  );
}
