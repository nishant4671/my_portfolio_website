import { personalInfo } from "@/lib/data";
import { FileDown, FileText, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container px-6">
        <h2 className="text-3xl font-bold mb-12">Experience</h2>
        <Card className="bg-card border-border border-l-4 border-l-primary overflow-hidden">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold mb-4">Internships & Research</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Open for internships and research roles. Actively seeking opportunities in AI/ML, Software Engineering, and Quantitative Research.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

const ResumeSection = () => {
  return (
    <section id="resume" className="py-24">
      <div className="container px-6">
        <h2 className="text-3xl font-bold mb-12">Resume</h2>
        <div className="flex flex-col sm:flex-row gap-6">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-8 rounded-xl shadow-lg shadow-primary/20 transition-all">
            <a href="/Nishant_Kumar_Resume.pdf" download>
              <FileDown className="mr-2" size={20} />
              Download Resume (PDF)
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-border hover:bg-muted text-foreground font-bold h-14 px-8 rounded-xl transition-all">
            <Link href="/resume" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2" size={20} />
              View Resume
              <ExternalLink className="ml-2 opacity-50" size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { ExperienceSection, ResumeSection };
