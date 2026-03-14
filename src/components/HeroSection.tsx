import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import profileImg from "@/assets/profile.png";

const roles = [
  "Software Developer",
  "Java Full-Stack Developer",
  "React Developer",
  "Spring Boot Developer",
  "Backend Developer",
  "Problem Solver",
];

const RESUME_URL = "https://drive.google.com/file/d/1tXnXbZCYm1eEdgR-c-N5cK6D3XWsNSw0/view?usp=drive_link";

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1500);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding pt-28">
      {/* Background orbs */}
      <div className="glow-orb w-72 h-72 top-1/4 left-1/4 -translate-x-1/2 opacity-40" />
      <div className="glow-orb w-96 h-96 bottom-1/4 right-1/4 translate-x-1/2 opacity-30" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-muted-foreground text-sm mb-3 font-body tracking-widest uppercase">
              Welcome to my portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold mb-4 text-foreground">
              Hi, I'm <span className="gradient-text">GOPIKA SRI R</span>
            </h1>
            <div className="text-xl sm:text-2xl font-heading font-semibold text-primary mb-4 h-9">
              <span>{text}</span>
              <span className="ml-0.5 animate-pulse">|</span>
            </div>
            <p className="text-muted-foreground text-base max-w-lg mx-auto lg:mx-0 mb-8 font-body">
              Turning ideas into real-world applications through code 🚀
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#projects" className="gradient-btn text-foreground flex items-center gap-2">
                <ArrowDown size={16} /> View Projects
              </a>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card px-6 py-3 rounded-lg font-heading font-semibold text-sm text-foreground hover:border-primary/30 transition-all duration-300 flex items-center gap-2"
              >
                <Download size={16} /> Download Resume
              </a>
            </div>
          </motion.div>

          {/* Right – profile */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="glow-orb w-80 h-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50" />
              <img
                src={profileImg}
                alt="Gopika Sri R – Full Stack Developer"
                className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 object-contain rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
