import { motion } from "framer-motion";

import CounterCard from "../components/CounterCard";
import SpecializationCard from "../components/SpecializationCard";

const specializations = [
  {
    title: "Event-Driven Systems",
    description:
      "Designing scalable architectures using BullMQ, Redis, queues, and asynchronous workflows to handle thousands of background operations efficiently.",
  },
  {
    title: "Real-Time Applications",
    description:
      "Building systems powered by WebSockets, WhatsApp APIs, and telephony integrations to enable instant communication and customer engagement.",
  },
  {
    title: "Queue Architectures",
    description:
      "Developing resilient job processing pipelines with retry strategies, scheduling, and fault tolerance for production environments.",
  },
  {
    title: "Cloud Deployments",
    description:
      "Working with AWS services, Docker, and modern deployment practices to deliver reliable and scalable backend solutions.",
  },
];

const counters = [
  {
    value: "2+",
    label: "Years of Experience",
  },
  {
    value: "50K+",
    label: "Async Jobs Processed",
  },
  {
    value: "300+",
    label: "DSA Problems Solved",
  },
  {
    value: "8+",
    label: "Core Technologies",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="
        px-6
        py-24
      "
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p
            className="
              uppercase
              tracking-[0.3em]
              text-cyan-400
              text-sm
            "
          >
            About
          </p>

          <h2
            className="
              mt-4
              text-4xl
              md:text-5xl
              font-black
            "
          >
            Behind The{" "}
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
              Systems I Build
            </span>
          </h2>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="
            max-w-4xl
            mx-auto
            mt-10
            text-center
          "
        >
          <p
            className="
              text-slate-400
              text-lg
              leading-9
            "
          >
            I am a backend-focused software engineer passionate
            about building production-grade systems that solve
            real business problems at scale.
          </p>

          <p
            className="
              mt-6
              text-slate-400
              text-lg
              leading-9
            "
          >
            At Revyog, I have architected event-driven services
            processing over <span className="text-cyan-400">50K+</span>{" "}
            asynchronous jobs, integrated telephony and WhatsApp
            APIs, and automated thousands of daily operations
            using BullMQ, Redis, and microservices.
          </p>

          <p
            className="
              mt-6
              text-slate-400
              text-lg
              leading-9
            "
          >
            I enjoy solving problems related to scalability,
            distributed systems, backend performance, and
            continuously sharpening my problem-solving abilities
            through data structures and algorithms.
          </p>
        </motion.div>

        {/* Specializations */}
        <div className="mt-20">
          <motion.h3
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            className="
              text-2xl
              font-bold
              mb-8
            "
          >
            What I Specialize In
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {specializations.map((item, index) => (
              <SpecializationCard
                key={item.title}
                title={item.title}
                description={item.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Impact Counters */}
        <div className="mt-20">
          <motion.h3
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            className="
              text-2xl
              font-bold
              mb-8
            "
          >
            Impact At A Glance
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {counters.map((item, index) => (
              <CounterCard
                key={item.label}
                value={item.value}
                label={item.label}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}