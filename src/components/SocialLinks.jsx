import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/raghav-maheshwari-21",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/raghav-maheshwari-9884b2249/",
    label: "LinkedIn",
  },
  {
    icon: FaEnvelope,
    href: "mailto:raghavmaheshwari171@gmail.com",
    label: "Email",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-4 mt-8">
      {socialLinks.map((social, index) => {
        const Icon = social.icon;

        return (
          <motion.a
            key={social.label}
            href={social.href}
            target={
              social.href.startsWith("http")
                ? "_blank"
                : undefined
            }
            rel={
              social.href.startsWith("http")
                ? "noopener noreferrer"
                : undefined
            }
            aria-label={social.label}
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6 + index * 0.1,
            }}
            whileHover={{
              y: -4,
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              flex items-center justify-center
              w-12 h-12
              rounded-2xl
              border border-white/10
              bg-white/5
              backdrop-blur-md
              text-slate-300
              transition-all duration-300
              hover:border-cyan-400
              hover:text-cyan-400
              hover:bg-white/10
            "
          >
            <Icon size={20} />
          </motion.a>
        );
      })}
    </div>
  );
}