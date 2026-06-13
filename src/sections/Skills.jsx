import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Microservices", "REST APIs"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "SQL", "Redis"],
  },
  {
    title: "Messaging & Queues",
    skills: ["BullMQ", "Kafka", "WebSockets"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, Lambda)", "Docker"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "JavaScript", "Bootstrap"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 py-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm">
            Skills
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-black">
            Tech{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-400 leading-8">
            A collection of technologies I use to design,
            build, and scale backend systems and full-stack
            applications.
          </p>
        </motion.div>

        {/* Skill Grid */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -6 }}
              className="
                rounded-3xl
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                p-6
              "
            >
              {/* Title */}
              <h3 className="text-xl font-bold text-cyan-400">
                {group.title}
              </h3>

              {/* Skills */}
              <div className="mt-5 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-3 py-2
                      rounded-full
                      bg-white/5
                      border border-white/10
                      text-sm
                      text-slate-300
                      hover:border-cyan-400
                      transition
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}