import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certs = [
  {
    title: "SQL and Relational Databases 101",
    platform: "Cognitive Class",
    date: "March 2025",
    link: "https://courses.cognitiveclass.ai/certificates/7a4c9073e42343b0810fe310bcf2ece5",
  },
  {
    title: "Introduction to Internet of Things (IoT)",
    platform: "Cisco Networking Academy",
    date: "April 2024",
    link: "https://www.credly.com/badges/4a89edc0-e36b-475c-88df-8e840805fd2b/print",
  },
  {
    title: "HTML & CSS",
    platform: "GUVI",
    date: "September 2024",
    link: null,
  },
];

const CertificationsSection = () => (
  <section id="certifications" className="section-padding">
    <div className="container mx-auto">
      <motion.h2
        className="text-3xl sm:text-4xl font-heading font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="gradient-text">Certifications</span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {certs.map((c, i) => (
          <motion.div
            key={i}
            className="glass-card-hover p-6 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <Award className="text-primary mb-3" size={28} />
            <h3 className="font-heading font-bold text-foreground text-sm mb-1">{c.title}</h3>
            <p className="text-xs text-primary font-heading font-medium mb-1">{c.platform}</p>
            <p className="text-xs text-muted-foreground mb-4">{c.date}</p>
            {c.link && (
              <a
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1 text-xs text-primary hover:text-secondary transition-colors font-heading font-semibold"
              >
                Verify <ExternalLink size={12} />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
