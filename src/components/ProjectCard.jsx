import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

export default function ProjectCard({
  title,
  period,
  description,
  features,
  technologies,
  github,
  live,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
      }}
      whileHover={{
        y: -8,
      }}
      className="
        rounded-3xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        overflow-hidden
      "
    >
      {/* Top Gradient */}
      <div
        className="
          h-2
          bg-gradient-to-r
          from-cyan-400
          via-indigo-500
          to-purple-500
        "
      />

      <div className="p-8">
        {/* Header */}
        <div className="flex flex-wrap justify-between gap-4">
          <div>
            <h3 className="text-3xl font-bold">
              {title}
            </h3>

            <p className="mt-2 text-cyan-400">
              {period}
            </p>
          </div>

          <div className="flex gap-3">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  h-12 w-12
                  rounded-xl
                  border border-white/10
                  bg-white/5
                  flex items-center justify-center
                  hover:border-cyan-400
                  transition
                "
              >
                <FaGithub />
              </a>
            )}

            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  h-12 w-12
                  rounded-xl
                  border border-white/10
                  bg-white/5
                  flex items-center justify-center
                  hover:border-cyan-400
                  transition
                "
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p
          className="
            mt-6
            text-slate-400
            leading-8
          "
        >
          {description}
        </p>

        {/* Features */}
        <div className="mt-8">
          <h4 className="font-semibold mb-4">
            Key Highlights
          </h4>

          <ul className="space-y-3">
            {features.map((feature) => (
              <li
                key={feature}
                className="
                  flex gap-3
                  text-slate-300
                "
              >
                <span className="text-cyan-400">
                  →
                </span>

                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech */}
        <div className="flex flex-wrap gap-3 mt-8">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="
                px-4 py-2
                rounded-full
                border border-white/10
                bg-white/5
                text-sm
                text-slate-300
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}