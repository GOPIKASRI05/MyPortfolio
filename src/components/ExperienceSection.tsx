import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "AI Software Developer Intern",
    company: "Tap Academy",
    location: "Bengaluru, India",
    duration: "Feb 2026 – Present",
    description: [
      "Developing full-stack web applications using Java, JavaScript, HTML, and CSS focusing on responsive UI and scalable backend functionality.",
      "Building RESTful APIs using Spring Boot and Hibernate and integrating them with React.js frontend applications.",
      "Designing and managing relational databases using MySQL and implementing CRUD operations and API integrations.",
    ],
    skills: ["Java", "Spring Boot", "React.js", "REST APIs", "MySQL"],
  },
  {
    title: "Mobile App Development Intern",
    company: "HackGeniX Tech Private Limited",
    location: "Chennai, India",
    duration: "June 2025 – December 2025",
    description: [
      "Developed a Healthcare Monitoring mobile application to help users view and manage basic health-related information.",
      "Implemented login and sign-up authentication to provide secure access to personal health dashboards.",
      "Designed multiple screens including dashboard, monitoring pages, profile, and settings.",
      "Built the application using Flutter with a clean healthcare themed UI.",
    ],
    skills: ["Flutter", "Dart", "UI Development", "Mobile Application Development"],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding">
    <div className="container mx-auto">
      <motion.h2
        className="text-3xl sm:text-4xl font-heading font-bold text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Work <span className="gradient-text">Experience</span>
      </motion.h2>

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line md:-translate-x-px" />

        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className={`relative flex flex-col md:flex-row gap-6 mb-12 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1/2 top-6 z-10" />

            <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-10" : "md:pl-10"}`}>
              <div className="glass-card-hover p-6">
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase size={16} className="text-primary" />
                  <h3 className="font-heading font-bold text-foreground">{exp.title}</h3>
                </div>
                <p className="font-heading font-semibold text-sm text-primary mb-1">{exp.company}</p>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1"><MapPin size={12} />{exp.location}</span>
                  <span className="flex items-center gap-1"><Calendar size={12} />{exp.duration}</span>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground font-body mb-4">
                  {exp.description.map((d, di) => (
                    <li key={di} className="flex gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((s) => (
                    <span key={s} className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary font-heading font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
