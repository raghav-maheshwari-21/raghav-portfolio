import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaServer,
  FaBolt,
  FaWhatsapp,
} from "react-icons/fa";

const services = [
  {
    icon: <FaBolt className="text-green-400" />,
    name: "BullMQ Workers",
    status: "Running",
  },
  {
    icon: <FaServer className="text-green-400" />,
    name: "Redis Cache",
    status: "Online",
  },
  {
    icon: <FaWhatsapp className="text-green-400" />,
    name: "Meta API",
    status: "Healthy",
  },
  {
    icon: <FaCheckCircle className="text-green-400" />,
    name: "WebSockets",
    status: "Connected",
  },
];

export default function BackendDashboard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
        dashboard-glow
        rounded-3xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        p-6
        overflow-hidden
      "
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            Backend Operations
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            Live Dashboard
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />

          <span className="text-sm text-slate-400">
            Production
          </span>
        </div>
      </div>

      {/* Services */}
      <div className="space-y-4">
        {services.map((service, index) => (
          <motion.div
            key={service.name}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2 + index * 0.1,
            }}
            className="
              flex items-center justify-between
              rounded-2xl
              border border-white/5
              bg-white/5
              px-4 py-3
            "
          >
            <div className="flex items-center gap-3">
              {service.icon}

              <span className="text-slate-200">
                {service.name}
              </span>
            </div>

            <span className="text-green-400 text-sm font-medium">
              {service.status}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <div className="my-6 h-px bg-white/10" />

      {/* Terminal */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.6,
        }}
        className="
          rounded-2xl
          bg-black/40
          border border-white/5
          p-4
          font-mono
          text-sm
        "
      >
        <p className="text-green-400">
          $ node worker.js
        </p>

        <p className="text-slate-400 mt-2">
          ✓ Queue initialized
        </p>

        <p className="text-slate-400">
          ✓ Redis connected
        </p>

        <p className="text-slate-400">
          ✓ Listening for jobs...
        </p>
      </motion.div>
    </motion.div>
  );
}