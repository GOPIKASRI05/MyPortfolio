import { Github, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="border-t py-8 px-4" style={{ borderColor: "hsla(0,0%,100%,0.06)" }}>
    <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="font-heading font-bold gradient-text">GOPIKA SRI R</span>
      <div className="flex items-center gap-4">
        <a
          href="https://www.linkedin.com/in/gopika-sri-r"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://github.com/GOPIKASRI05"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
      </div>
      <p className="text-xs text-muted-foreground font-body">
        © {new Date().getFullYear()} Gopika Sri R. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
