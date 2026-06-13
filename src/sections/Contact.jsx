import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-24"
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm">
            Contact
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-black">
            Let’s Build{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Something Scalable
            </span>
          </h2>

          <p className="mt-6 text-slate-400 leading-8 max-w-2xl mx-auto">
            I’m always open to discussing backend engineering roles,
            scalable systems, and impactful product ideas.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="
            mt-16
            rounded-3xl
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            p-10
            text-center
          "
        >
          {/* Email CTA */}
          <div className="flex flex-col items-center gap-6">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=raghavmaheshwari171@gmail.com"
              target="_self"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-3
                px-8 py-4
                rounded-xl
                bg-gradient-to-r
                from-indigo-500
                to-purple-600
                hover:scale-105
                transition
                font-medium
              "
            >
              <FaEnvelope />
              Send Email
            </a>

            <p className="text-slate-400">
              or reach out via social platforms
            </p>

            {/* Social Links */}
            <div className="flex gap-6 mt-4">
              <a
                href="https://github.com/raghav-maheshwari-21"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-12 h-12
                  flex items-center justify-center
                  rounded-xl
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
                  w-12 h-12
                  flex items-center justify-center
                  rounded-xl
                  border border-white/10
                  bg-white/5
                  hover:border-cyan-400
                  transition
                "
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-slate-500 mt-10 text-sm"
        >
        </motion.p>

      </div>
    </section>
  );
}