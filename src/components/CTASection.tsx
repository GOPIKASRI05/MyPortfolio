import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <motion.div
        className="glass-card p-12 text-center relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="glow-orb w-64 h-64 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-3 relative z-10">
          Let's work <span className="gradient-text">together</span>
        </h2>
        <p className="text-muted-foreground font-body mb-6 relative z-10">
          Open for opportunities and collaborations.
        </p>
        <a
          href="#contact"
          className="gradient-btn text-foreground inline-flex items-center gap-2 relative z-10"
        >
          Get In Touch <ArrowRight size={16} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
