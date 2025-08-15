/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const FORMSPREE_ID = "xjkozegl"; // ✅ your Formspree form id

export default function Contact() {
  const [toast, setToast] = useState({ show: false, ok: true, msg: "" });

  // shared tokens
  const cardBase =
    "bg-[#0B0F17] border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.015]";
  const cardShadowIdle =
    "shadow-[inset_2px_2px_6px_rgba(0,0,0,.55),inset_-2px_-2px_6px_rgba(255,255,255,.035),0_0_14px_2px_rgba(0,245,212,.10)]";
  const cardShadowHover =
    "hover:shadow-[inset_2px_2px_6px_rgba(0,0,0,.40),inset_-2px_-2px_6px_rgba(255,255,255,.04),0_0_22px_3px_rgba(0,245,212,.22),_0_0_70px_16px_rgba(0,245,212,.10)]";

  const pillBase = "bg-[#0E141F] border border-white/10 text-white/90";
  const pillEmboss =
    "shadow-[inset_2px_2px_6px_rgba(0,0,0,.55),inset_-2px_-2px_6px_rgba(255,255,255,.045)]";
  const focusGlow =
    "focus:outline-none focus:ring-2 focus:ring-[#00F5D4]/70 focus:ring-offset-0";

  // AJAX submit to Formspree (stay on page)
  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // honeypot quick exit (spam)
    if (data.get("_gotcha")) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    const original = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        form.reset();
        showToast(true, "Message sent — I’ll get back to you soon! ✅");
        submitBtn.textContent = "Sent ✅";
      } else {
        showToast(false, "Oops — failed to send. Please try again.");
        submitBtn.textContent = "Try again";
      }
    } catch (err) {
      console.error(err);
      showToast(false, "Network error — please try again.");
      submitBtn.textContent = "Try again";
    } finally {
      setTimeout(() => {
        submitBtn.textContent = original;
        submitBtn.disabled = false;
      }, 1600);
    }
  }

  function showToast(ok, msg) {
    setToast({ show: true, ok, msg });
    // auto-hide after 3.2s
    setTimeout(() => setToast((t) => ({ ...t, show: false })), 3200);
  }

  return (
    <section
      id="contact"
      className="relative z-20 py-20 px-8 md:px-20 text-white flex flex-col items-center justify-center"
    >
      {/* Toast (bottom-right) */}
      <motion.div
        aria-live="polite"
        initial={{ opacity: 0, x: 24, y: 24 }}
        animate={
          toast.show
            ? { opacity: 1, x: 0, y: 0 }
            : { opacity: 0, x: 24, y: 24 }
        }
        transition={{ duration: 0.25 }}
        className={[
          "fixed bottom-6 right-6 pointer-events-none select-none",
          "rounded-xl px-4 py-3 text-sm shadow-lg backdrop-blur-md",
          "border",
          toast.ok
            ? "bg-[#01261f]/85 border-emerald-400/40 text-emerald-100"
            : "bg-[#261010]/85 border-rose-400/40 text-rose-100",
        ].join(" ")}
        style={{
          boxShadow: toast.ok
            ? "0 0 18px rgba(0,245,212,.30)"
            : "0 0 18px rgba(244,63,94,.25)",
        }}
      >
        {toast.msg}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-6 text-center"
      >
        Contact Me
      </motion.h2>

      <p className="text-center max-w-xl mb-10 text-lg leading-relaxed text-white/85">
        Interested in collaborating or hiring me? Reach out via the form or connect on LinkedIn / GitHub.
      </p>

      {/* Social icons — neumorphic circular buttons */}
      <div className="flex gap-6 mb-12">
        {[
          {
            href: "https://github.com/ShaurabhGhimire",
            label: "GitHub",
            Icon: FaGithub,
          },
          {
            href: "https://linkedin.com/in/shaurabhghimire",
            label: "LinkedIn",
            Icon: FaLinkedin,
          },
          {
            href: "mailto:sauravghimire2003@gmail.com",
            label: "Email",
            Icon: FaEnvelope,
          },
        ].map(({ href, label, Icon }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.98 }}
            className={[
              "group relative grid place-items-center h-14 w-14 rounded-full",
              cardBase,
              cardShadowIdle,
              cardShadowHover,
              "transition-all duration-300",
            ].join(" ")}
            aria-label={label}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ boxShadow: "inset 0 0 0 1px rgba(0,245,212,0.28)" }}
            />
            <Icon
              size={22}
              className="opacity-95 transition-opacity duration-200 group-hover:opacity-100"
            />
          </motion.a>
        ))}
      </div>

      {/* Form container — soft embossed card */}
      <motion.form
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={[
          "w-full max-w-2xl rounded-2xl p-8",
          cardBase,
          cardShadowIdle,
          cardShadowHover,
          "transition-all duration-300",
        ].join(" ")}
        method="POST"
        onSubmit={handleSubmit}
      >
        {/* Optional subject (shows in your email) */}
        <input type="hidden" name="_subject" value="Portfolio contact" />
        {/* Honeypot field (hidden) */}
        <input
          type="text"
          name="_gotcha"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Name */}
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-white/80">Name</span>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className={[
                "rounded-lg px-4 py-3",
                pillBase,
                pillEmboss,
                "bg-gradient-to-b from-white/[0.04] to-black/20",
                "transition-all duration-200",
                "hover:bg-white/[0.06]",
                focusGlow,
              ].join(" ")}
              required
            />
          </label>

          {/* Email */}
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-white/80">Email</span>
            <input
              name="email" // must be "email" so Reply-To works
              type="email"
              placeholder="you@example.com"
              className={[
                "rounded-lg px-4 py-3",
                pillBase,
                pillEmboss,
                "bg-gradient-to-b from-white/[0.04] to-black/20",
                "transition-all duration-200",
                "hover:bg-white/[0.06]",
                focusGlow,
              ].join(" ")}
              required
            />
          </label>
        </div>

        {/* Message */}
        <label className="flex flex-col gap-2 mb-8">
          <span className="text-sm font-medium text-white/80">Message</span>
          <textarea
            name="message"
            rows="5"
            placeholder="Tell me about your project..."
            className={[
              "rounded-lg px-4 py-3 resize-y",
              pillBase,
              pillEmboss,
              "bg-gradient-to-b from-white/[0.04] to-black/20",
              "transition-all duration-200",
              "hover:bg-white/[0.06]",
              focusGlow,
            ].join(" ")}
            required
          />
        </label>

        {/* Submit */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.985 }}
          className={[
            "w-full rounded-xl py-3.5 font-semibold tracking-wide",
            "bg-[#00F5D4] text-[#0E1017]",
            "shadow-[0_10px_22px_rgba(0,0,0,.45),_0_0_18px_rgba(0,245,212,.30)]",
            "hover:shadow-[0_16px_32px_rgba(0,0,0,.5),_0_0_28px_rgba(0,245,212,.38)]",
            "transition-all duration-300",
          ].join(" ")}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
}
