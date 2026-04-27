import React from "react";
import { personalInfo } from "@/lib/data";
import { Github, Linkedin, Instagram, Mail, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Nishant Kumar</h3>
            <p className="text-muted-foreground text-sm">Software Engineering & AI Intern</p>
          </div>

          <div className="flex gap-6">
            <Link href={personalInfo.github} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={20} />
            </Link>
            <Link href={personalInfo.linkedin} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </Link>
            <Link href={personalInfo.instagram} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram size={20} />
            </Link>
            <a href={`mailto:${personalInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
            <a href={`tel:${personalInfo.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
              <Phone size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-xs">
            © {currentYear} Nishant Kumar. Built with Next.js, Tailwind CSS & shadcn/ui.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
