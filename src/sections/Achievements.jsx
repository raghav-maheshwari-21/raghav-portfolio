import { motion } from "framer-motion";

const achievements = [
  {
    title: "Problem Solving",
    items: [
      "Solved 300+ problems on GeeksForGeeks & LeetCode",
      "Achieved 22nd institutional rank on GeeksForGeeks",
    ],
  },
  {
    title: "Certifications",
    items: [
      "Frontend Development with React – Meta (Coursera)",
      "Introduction to Containers with Docker – IBM (Coursera)",
      "Oracle SQL Certification Badge",
      "Node.js Certification – The Digital Adda",
    ],
  },
  {
    title: "Core Strength",
    items: [
      "Strong foundation in DSA and system design fundamentals",
      "Backend-focused engineer with production-level experience",
    ],
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
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
            Achievements
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-black">
            Proof of{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-400 leading-8">
            A snapshot of competitive programming,
            certifications, and continuous learning
            that complements my backend engineering experience.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {achievements.map((section, index) => (
            <motion.div
              key={section.title}
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
              <h3 className="text-xl font-bold text-cyan-400">
                {section.title}
              </h3>

              <ul className="mt-5 space-y-4">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="
                      flex gap-3
                      text-slate-300
                      leading-7
                    "
                  >
                    <span className="text-cyan-400">
                      →
                    </span>

                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}