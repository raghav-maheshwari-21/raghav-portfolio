import { motion } from "framer-motion";

export default function ExperienceCard({
  company,
  role,
  duration,
  achievements,
  technologies,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
      }}
      className="
        relative
        rounded-3xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        p-8
      "
    >
      {/* Timeline Dot */}
      <div
        className="
          absolute
          -left-[38px]
          top-10
          h-5
          w-5
          rounded-full
          bg-cyan-400
          border-4
          border-[#0B0F19]
        "
      />

      {/* Duration */}
      <p
        className="
          text-sm
          uppercase
          tracking-[0.25em]
          text-cyan-400
        "
      >
        {duration}
      </p>

      {/* Role */}
      <h3 className="mt-3 text-2xl font-bold">
        {role}
      </h3>

      {/* Company */}
      <p className="mt-2 text-slate-400">
        {company}
      </p>

      {/* Achievements */}
      <ul className="mt-6 space-y-4">
        {achievements.map((achievement) => (
          <li
            key={achievement}
            className="
              flex
              gap-3
              text-slate-300
              leading-7
            "
          >
            <span className="text-cyan-400 mt-1">
              →
            </span>

            <span>{achievement}</span>
          </li>
        ))}
      </ul>

      {/* Technologies */}
      <div className="flex flex-wrap gap-3 mt-8">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="
              px-4
              py-2
              rounded-full
              bg-white/5
              border border-white/10
              text-sm
              text-slate-300
            "
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}