import { motion } from "framer-motion";

export default function CounterCard({
  value,
  label,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
      }}
      whileHover={{
        y: -5,
      }}
      className="
        rounded-2xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        p-6
      "
    >
      <h3
        className="
          text-3xl
          font-bold
          bg-gradient-to-r
          from-cyan-400
          to-indigo-400
          bg-clip-text
          text-transparent
        "
      >
        {value}
      </h3>

      <p className="mt-2 text-slate-400">
        {label}
      </p>
    </motion.div>
  );
}