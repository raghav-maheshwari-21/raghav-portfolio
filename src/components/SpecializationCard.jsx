import { motion } from "framer-motion";

export default function SpecializationCard({
  title,
  description,
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
      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-slate-400 leading-7">
        {description}
      </p>
    </motion.div>
  );
}