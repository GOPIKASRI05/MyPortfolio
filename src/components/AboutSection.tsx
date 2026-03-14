import { motion } from "framer-motion";
import { User, Code, Smartphone, Database } from "lucide-react";

const highlights = [
  { icon: Code, label: "Full-Stack Dev" },
  { icon: Database, label: "Backend & APIs" },
  { icon: Smartphone, label: "Mobile Apps" },
  { icon: User, label: "Clean Code" },
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10 font-body">
          Java Full-Stack Developer focused on building scalable web applications using React, Spring Boot, and MySQL, with a passion for clean code and impactful solutions.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-4 gap-4 mb-10">
        {highlights.map((h, i) => (
          <motion.div
            key={h.label}
            className="glass-card-hover p-6 flex flex-col items-center gap-3 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <h.icon className="text-primary" size={28} />
            <span className="font-heading font-semibold text-sm text-foreground">{h.label}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="glass-card p-8 max-w-3xl mx-auto space-y-4 text-muted-foreground font-body text-sm leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p>I am a Java Full-Stack Developer with a strong interest in building scalable and user-friendly applications. My experience includes developing responsive web solutions using React, Spring Boot, Hibernate, and MySQL.</p>
        <p>I focus on writing clean, maintainable code and designing applications with efficient backend functionality and intuitive user interfaces. I have hands-on experience working on both frontend and backend development.</p>
        <p>On the frontend, I build responsive interfaces using HTML, CSS, JavaScript, and React. On the backend, I develop RESTful APIs and manage data persistence using Spring Boot, Hibernate, and MySQL.</p>
        <p>Additionally, I developed a cross-platform Health Monitoring mobile application using Flutter and Dart that includes login, sign-up, and dashboard functionality.</p>
        <p>I enjoy solving real-world problems through technology and continuously improving my software development skills.</p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
