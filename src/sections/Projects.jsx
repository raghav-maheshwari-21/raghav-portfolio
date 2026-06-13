import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "ListEase",
    period: "Dec 2022 – Feb 2023",
    description:
      "A full-stack MERN application designed for efficient product list management. Built with secure authentication, RESTful APIs, and advanced CRUD operations to deliver a seamless user experience.",

    features: [
      "Implemented secure JWT-based authentication and authorization.",
      "Built RESTful APIs using Node.js and Express.js.",
      "Developed advanced CRUD operations for product management.",
      "Integrated MongoDB for efficient data persistence.",
      "Created a responsive React-based user interface.",
    ],

    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST APIs",
      "JavaScript",
      "Postman",
    ],

    github: "https://github.com/raghav-maheshwari-21/ListEase-MERN-App",
    live: "",
  },

  {
    title: "Employee Management System",
    period: "Apr 2023 – Jun 2023",
    description:
      "A desktop-based Java application developed to streamline employee record management and administrative operations through an intuitive graphical interface.",

    features: [
      "Developed using Java Swing and AWT.",
      "Integrated JDBC for database communication.",
      "Managed employee records with MySQL.",
      "Implemented create, update, delete, and search functionalities.",
      "Focused on clean UI and efficient administrative workflows.",
    ],

    technologies: [
      "Java",
      "Swing",
      "AWT",
      "JDBC",
      "MySQL",
    ],

    github: "https://github.com/raghav-maheshwari-21/Employee-Management-System",
    live: "",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-24"
    >
      <div className="max-w-7xl mx-auto">
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
            Projects
          </p>

          <h2
            className="
              mt-4
              text-4xl
              md:text-5xl
              font-black
            "
          >
            Featured{" "}
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
              Projects
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
            A collection of projects that showcase my
            ability to design systems, build full-stack
            applications, and transform ideas into
            production-ready solutions.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="mt-20 space-y-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              period={project.period}
              description={project.description}
              features={project.features}
              technologies={project.technologies}
              github={project.github}
              live={project.live}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}