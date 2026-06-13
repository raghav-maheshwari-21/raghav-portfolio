import { motion } from "framer-motion";

export default function FloatingBadge({
  icon,
  name,
  delay = 0,
  className = "",
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: {
          duration: 0.5,
          delay,
        },
        scale: {
          duration: 0.5,
          delay,
        },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      }}
      whileHover={{
        scale: 1.08,
        y: -4,
      }}
      className={`
        inline-flex
        items-center
        gap-2
        px-4
        py-2
        rounded-2xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-lg
        text-slate-200
        cursor-default
        select-none
        ${className}
      `}
    >
      <span className="text-lg">
        {icon}
      </span>

      <span className="text-sm font-medium">
        {name}
      </span>
    </motion.div>
  );
}