import { motion } from "framer-motion";
import ExperienceCard from "../components/ExperienceCard";

const experiences = [
  {
    company: "Revyog • Mumbai",
    role: "Associate Developer",
    duration: "Aug 2024 – Present",
    achievements: [
      "Improved API response time by 25% by optimizing backend services and REST APIs for the Lead Management System.",
      "Integrated TeleCMI to enable intelligent call routing and automated lead assignment, reducing lead response time by 30%.",
      "Built Meta WhatsApp integrations with queuing mechanisms for real-time customer communication.",
      "Developed AI-powered WhatsApp automation for instant quotation delivery, reducing manual effort by 40%.",
      "Automated 10K+ daily operations using cron-based workflows for campaigns, follow-ups, and transaction synchronization.",
      "Architected scalable event-driven services processing 50K+ asynchronous jobs using BullMQ, Redis, WebSockets, and microservices.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "BullMQ",
      "WebSockets",
      "AWS",
      "Microservices",
      "Meta API",
      "TeleCMI",
    ],
  },

  {
    company: "Encanto Technologies • Indore (Remote)",
    role: "Full Stack Developer Intern",
    duration: "Jan 2024 – Jun 2024",
    achievements: [
      "Developed RESTful APIs to streamline backend operations and improve system responsiveness.",
      "Enhanced data retrieval performance and application efficiency.",
      "Integrated frontend and backend systems using Node.js for real-time data exchange.",
      "Improved overall application functionality, contributing to increased user engagement and retention.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Postman",
      "JavaScript",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
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
          }}
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
            Experience
          </p>

          <h2
            className="
              mt-4
              text-4xl
              md:text-5xl
              font-black
            "
          >
            Building{" "}
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
              Production Systems
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-3xl
              mx-auto
              text-slate-400
              leading-8
            "
          >
            From scalable lead management platforms to
            real-time communication systems, I've focused
            on delivering measurable business impact
            through engineering excellence.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Vertical Line */}
          <div
            className="
              hidden md:block
              absolute
              left-[9px]
              top-0
              bottom-0
              w-[2px]
              bg-gradient-to-b
              from-cyan-400
              via-indigo-500
              to-purple-500
            "
          />

          <div className="space-y-12 md:pl-16">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`${experience.company}-${experience.role}`}
                company={experience.company}
                role={experience.role}
                duration={experience.duration}
                achievements={experience.achievements}
                technologies={experience.technologies}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}