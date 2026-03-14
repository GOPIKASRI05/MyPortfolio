import { motion } from "framer-motion";

interface Skill {
  name: string;
  icon: string;
}

const categories: { title: string; skills: Skill[] }[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Hibernate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg" },
      { name: "JDBC", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "J2EE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "REST API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Eclipse", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    ],
  },
  {
    title: "AI Tools",
    skills: [
      { name: "ChatGPT", icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
      { name: "Google Gemini", icon: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" },
      { name: "Lovable AI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="container mx-auto">
      <motion.h2
        className="text-3xl sm:text-4xl font-heading font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        My <span className="gradient-text">Skills</span>
      </motion.h2>

      {categories.map((cat, ci) => (
        <div key={cat.title} className="mb-10">
          <motion.h3
            className="text-lg font-heading font-semibold text-primary mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.1 }}
          >
            {cat.title}
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {cat.skills.map((s, si) => (
              <motion.div
                key={s.name}
                className="glass-card-hover p-5 flex flex-col items-center gap-3 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: si * 0.05, duration: 0.4 }}
                whileHover={{ y: -6 }}
              >
                <img
                  src={s.icon}
                  alt={s.name}
                  className="w-10 h-10 object-contain group-hover:animate-float"
                  loading="lazy"
                />
                <span className="text-xs font-heading font-medium text-foreground text-center">{s.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default SkillsSection;
