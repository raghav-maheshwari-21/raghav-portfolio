import { motion } from "framer-motion";

const metrics = [
  {
    value: "50K+",
    label: "Async Jobs",
  },
  {
    value: "15+",
    label: "Automations",
  },
  {
    value: "25%",
    label: "Faster APIs",
  },
  {
    value: "30%",
    label: "Lead Response",
  },
];

export default function MetricsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 mt-12 max-w-md">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3 + index * 0.1,
          }}
          whileHover={{
            y: -5,
          }}
          className="
            rounded-2xl
            border border-white/10
            bg-white/5
            backdrop-blur-md
            p-4
            transition
          "
        >
          <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            {metric.value}
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            {metric.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}