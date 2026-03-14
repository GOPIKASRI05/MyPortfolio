import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const RESUME_URL = "https://drive.google.com/file/d/1tXnXbZCYm1eEdgR-c-N5cK6D3XWsNSw0/view?usp=drive_link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="glass-nav">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#home" className="font-heading font-bold text-lg gradient-text">
          GOPIKA SRI R
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-btn flex items-center gap-2 text-foreground"
          >
            <Download size={16} /> Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t"
            style={{ borderColor: "hsla(0,0%,100%,0.06)" }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-btn flex items-center justify-center gap-2 text-foreground mt-2"
              >
                <Download size={16} /> Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
