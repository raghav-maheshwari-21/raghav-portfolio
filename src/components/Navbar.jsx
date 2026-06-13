import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Achievements", id: "achievements" },
    { label: "Contact", id: "contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map((l) =>
                document.getElementById(l.id)
            );

            const scrollPos = window.scrollY + 120;

            sections.forEach((section, index) => {
                if (!section) return;

                const top = section.offsetTop;
                const bottom = top + section.offsetHeight;

                if (scrollPos >= top && scrollPos < bottom) {
                    setActive(navLinks[index].id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="
        fixed top-0 left-0 w-full
        z-50
        backdrop-blur-xl
        bg-black/40
        border-b border-white/10
      "
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <div className="text-xl font-bold">
                    <span className="text-cyan-400">Raghav</span>
                    <span className="text-white">.dev</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 text-sm text-slate-300">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => handleScroll(link.id)}
                            className={`
  transition
  hover:text-cyan-400
  ${active === link.id ? "text-cyan-400" : "text-slate-300"}
`}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-white"
                >
                    {open ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="
            md:hidden
            px-6 pb-6
            flex flex-col gap-4
            bg-black/60
            backdrop-blur-xl
            border-t border-white/10
          "
                >
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => handleScroll(link.id)}
                            className="
                text-left
                text-slate-300
                hover:text-cyan-400
                transition
              "
                        >
                            {link.label}
                        </button>
                    ))}
                </motion.div>
            )}
        </motion.nav>
    );
}