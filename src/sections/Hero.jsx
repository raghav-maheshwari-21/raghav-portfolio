import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import SocialLinks from "../components/SocialLinks";
import MetricsGrid from "../components/MetricsGrid";
import BackendDashboard from "../components/BackendDashboard";
import FloatingBadge from "../components/FloatingBadge";

import {
    SiNodedotjs,
    SiRedis,
    SiDocker,
    SiMongodb,
    SiJavascript,
    SiReact,
    SiRabbitmq,
    SiApachekafka,
    SiSocketdotio,
} from "react-icons/si";

import { FaAws } from "react-icons/fa";

export default function Hero() {
    return (
        <section
            className="
        min-h-screen
        flex items-center
        px-6
        pt-32
        pb-20
      "
        >
            <div
                className="
          max-w-7xl
          mx-auto
          grid
          lg:grid-cols-2
          gap-16
          items-center
        "
            >
                {/* LEFT SIDE */}
                <div>
                    {/* LEFT SIDE */}
                    <div>
                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="
      text-cyan-400
      tracking-[0.3em]
      text-sm
      font-medium
      uppercase
      mb-4
    "
                        >
                            Associate Developer @ Revyog
                        </motion.p>

                        {/* Name */}
                        <motion.h1
                            initial={{
                                opacity: 0,
                                y: 40,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.8,
                            }}
                            className="
      text-5xl
      md:text-7xl
      font-black
      leading-tight
    "
                        >
                            Raghav
                            <br />

                            <span
                                className="
        bg-gradient-to-r
        from-indigo-400
        via-purple-400
        to-cyan-400
        bg-clip-text
        text-transparent
      "
                            >
                                Maheshwari
                            </span>
                        </motion.h1>

                        {/* Typing Animation */}
                        <div className="mt-6 text-2xl text-slate-300">
                            <TypeAnimation
                                sequence={[
                                    "Building Scalable Backends.",
                                    2500,
                                    "Designing Event-Driven Systems.",
                                    2500,
                                    "Automating Customer Experiences.",
                                    2500,
                                    "Turning Ideas Into Production.",
                                    2500,
                                ]}
                                repeat={Infinity}
                                speed={50}
                            />
                        </div>

                        {/* Summary */}
                        <motion.p
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 0.3,
                            }}
                            className="
      mt-8
      max-w-xl
      text-slate-400
      leading-8
      text-lg
    "
                        >
                            Backend-focused engineer specializing in
                            Node.js, Redis, BullMQ, AWS, and
                            microservices to build production-ready
                            systems that scale and deliver real
                            business impact.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 0.4,
                            }}
                            className="flex flex-wrap gap-4 mt-10"
                        >
                            <a
                                href="https://drive.google.com/file/d/1zjvAx5mwqm0UknGArW21fbJtLWWX5cyD/view?usp=sharing"
                                target="blank"
                                download
                                className="
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
                                Download Resume
                            </a>

                            <a
                                href="#contact"
                                className="
        px-8 py-4
        rounded-xl
        border border-white/10
        hover:border-cyan-400
        transition
        font-medium
      "
                            >
                                Contact Me
                            </a>
                        </motion.div>

                        {/* Social Links */}
                        <SocialLinks />

                        {/* Metrics */}
                        <MetricsGrid />
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="relative">
                    {/* RIGHT SIDE */}
                    <div className="relative
  flex
  items-center
  justify-center
  mt-12
  lg:mt-0">
                        {/* Backend Dashboard */}
                        <BackendDashboard />

                        {/* Floating Badges (Desktop Only) */}

                        {/* Node.js */}
                        <div className="absolute top-6 -left-12 hidden lg:block">
                            <FloatingBadge
                                icon={<SiNodedotjs className="text-green-400" />}
                                name="Node.js"
                                delay={0}
                            />
                        </div>

                        {/* Redis */}
                        <div className="absolute top-28 right-0 hidden lg:block">
                            <FloatingBadge
                                icon={<SiRedis className="text-red-400" />}
                                name="Redis"
                                delay={0.3}
                            />
                        </div>

                        {/* Reactjs */}
                        <div className="absolute bottom-32 -left-8 hidden lg:block">
                            <FloatingBadge
                                icon={<SiReact className="text-blue-400" />}
                                name="Reactjs"
                                delay={0.6}
                            />
                        </div>

                        <div className="absolute bottom-60 -right-2 hidden lg:block">
                            <FloatingBadge
                                icon={<SiSocketdotio className="text-pink-400" />}
                                name="WebSockets"
                                delay={0.6}
                            />
                        </div>

                        {/* MongoDB */}
                        <div className="absolute bottom-16 right-6 hidden lg:block">
                            <FloatingBadge
                                icon={<SiMongodb className="text-green-500" />}
                                name="MongoDB"
                                delay={0.9}
                            />
                        </div>

                        {/* AWS */}
                        <div className="absolute top-1/2 -left-16 -translate-y-1/2 hidden lg:block">
                            <FloatingBadge
                                icon={<FaAws className="text-orange-400" />}
                                name="AWS"
                                delay={1.2}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}