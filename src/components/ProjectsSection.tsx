import { motion } from "framer-motion";
import { ExternalLink, Github, Smartphone } from "lucide-react";

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="container mx-auto">
      <motion.h2
        className="text-3xl sm:text-4xl font-heading font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        My <span className="gradient-text">Projects</span>
      </motion.h2>

      <motion.div
        className="glass-card-hover p-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <Smartphone className="text-primary" size={24} />
          <h3 className="font-heading font-bold text-xl text-foreground">Health Monitoring System App</h3>
        </div>
        <span className="inline-block text-xs px-2 py-1 rounded-md bg-primary/10 text-primary font-heading font-medium mb-4">
          Mobile App Development
        </span>
        <ul className="space-y-2 text-sm text-muted-foreground font-body mb-6">
          <li className="flex gap-2"><span className="text-primary">▹</span>Developed a cross-platform Health Monitoring mobile application using Flutter and Dart with login, sign-up, and dashboard functionality.</li>
          <li className="flex gap-2"><span className="text-primary">▹</span>Designed responsive UI using Flutter Material widgets and implemented smooth navigation across screens.</li>
        </ul>
        <div className="flex flex-wrap gap-2 mb-6">
          {["Flutter", "Dart", "Material UI", "VS Code", "Android Studio"].map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-md bg-secondary/10 text-secondary font-heading font-medium">
              {t}
            </span>
          ))}
        </div>
        <a
          href="https://github.com/GOPIKASRI05/Health-Monitoring-System"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-primary hover:text-secondary transition-colors font-heading font-semibold"
        >
          <Github size={16} /> View on GitHub <ExternalLink size={14} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
