import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
        mt-20
        border-t border-white/10
        bg-black/40
        backdrop-blur-xl
        px-6 py-12
      "
    >
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-3 gap-10 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold">
              <span className="text-cyan-400">Raghav</span>
              <span className="text-white">.dev</span>
            </h3>

            <p className="mt-3 text-slate-400 leading-7">
              Full Stack focused on scalable systems,
              distributed architecture, and production-grade APIs.
            </p>
          </motion.div>

          {/* Center */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-2 text-slate-400 text-sm"
          >
            <p className="hover:text-cyan-400 transition cursor-pointer">
              Home
            </p>
            <p className="hover:text-cyan-400 transition cursor-pointer">
              Experience
            </p>
            <p className="hover:text-cyan-400 transition cursor-pointer">
              Projects
            </p>
            <p className="hover:text-cyan-400 transition cursor-pointer">
              Contact
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-start md:items-end gap-4"
          >
            <p className="text-slate-400 text-sm">
              Let’s connect
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/raghav-maheshwari-21"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-10 h-10
                  flex items-center justify-center
                  rounded-lg
                  border border-white/10
                  bg-white/5
                  hover:border-cyan-400
                  transition
                "
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/raghav-maheshwari-9884b2249/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-10 h-10
                  flex items-center justify-center
                  rounded-lg
                  border border-white/10
                  bg-white/5
                  hover:border-cyan-400
                  transition
                "
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:raghavmaheshwari171@gmail.com"
                className="
                  w-10 h-10
                  flex items-center justify-center
                  rounded-lg
                  border border-white/10
                  bg-white/5
                  hover:border-cyan-400
                  transition
                "
              >
                <FaEnvelope />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Line */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Raghav Maheshwari. All rights reserved.
        </div>

      </div>
    </footer>
  );
}