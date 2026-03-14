import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const education = [
  {
    degree: "B.E Computer Science and Technology",
    school: "Vivekanandha College of Engineering for Women (Autonomous)",
    location: "Tiruchengode, India",
    year: "Expected Graduation: 2026",
    grade: "CGPA: 8.0",
    desc: "Pursuing a Bachelor of Engineering in Computer Science and Technology with strong focus on programming and web development.",
  },
  {
    degree: "H.S.C",
    school: "Mary Matha Matriculation Higher Secondary School",
    location: "Theni, India",
    year: "Graduated: 2022",
    grade: "Percentage: 81.3%",
    desc: "",
  },
  {
    degree: "S.S.L.C",
    school: "Mary Matha Matriculation Higher Secondary School",
    location: "Theni, India",
    year: "Graduated: 2020",
    grade: "Percentage: 87.4%",
    desc: "",
  },
];

const EducationSection = () => (
  <section id="education" className="section-padding">
    <div className="container mx-auto">
      <motion.h2
        className="text-3xl sm:text-4xl font-heading font-bold text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="gradient-text">Education</span>
      </motion.h2>

      <div className="relative max-w-2xl mx-auto">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 timeline-line" />

        {education.map((e, i) => (
          <motion.div
            key={i}
            className="relative ml-10 mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
          >
            <div className="absolute -left-10 w-3 h-3 rounded-full bg-primary border-2 border-background top-6 -translate-x-0.5 z-10" />
            <div className="glass-card-hover p-6">
              <div className="flex items-center gap-2 mb-1">
                <GraduationCap size={18} className="text-primary" />
                <h3 className="font-heading font-bold text-foreground">{e.degree}</h3>
              </div>
              <p className="text-sm font-heading font-semibold text-primary mb-1">{e.school}</p>
              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-2">
                <span className="flex items-center gap-1"><MapPin size={12} />{e.location}</span>
                <span className="flex items-center gap-1"><Calendar size={12} />{e.year}</span>
              </div>
              <span className="inline-block text-xs px-2 py-1 rounded-md bg-primary/10 text-primary font-heading font-medium mb-2">{e.grade}</span>
              {e.desc && <p className="text-sm text-muted-foreground font-body">{e.desc}</p>}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
