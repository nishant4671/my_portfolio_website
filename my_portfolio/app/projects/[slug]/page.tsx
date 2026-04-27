import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { ArrowLeft, Github, Calendar, User, Target } from "lucide-react";
import Link from "next/link";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container px-6 max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-12 transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Back to Portfolio
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-border">
            <div className="flex flex-col gap-1">
              <div className="flex items-center text-muted-foreground text-xs uppercase tracking-wider mb-1">
                <User size={14} className="mr-1" /> Role
              </div>
              <span className="text-sm font-medium">{project.role}</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center text-muted-foreground text-xs uppercase tracking-wider mb-1">
                <Target size={14} className="mr-1" /> Domain
              </div>
              <span className="text-sm font-medium">{project.domain}</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center text-muted-foreground text-xs uppercase tracking-wider mb-1">
                <Calendar size={14} className="mr-1" /> Date
              </div>
              <span className="text-sm font-medium">{project.date}</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center text-muted-foreground text-xs uppercase tracking-wider mb-1">
                <Github size={14} className="mr-1" /> Link
              </div>
              <a href="#" className="text-sm font-medium text-primary hover:underline">Repository</a>
            </div>
          </div>
        </header>

        <section className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Description</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              {project.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((t) => (
                <Badge key={t} variant="secondary" className="px-4 py-1.5 bg-muted text-sm font-normal">
                  {t}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">How I Did It</h2>
            <div className="p-8 bg-muted/30 rounded-2xl border border-border">
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                {project.howIDidIt}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Media</h2>
            <div className="aspect-video bg-muted rounded-2xl flex items-center justify-center text-muted-foreground border border-dashed border-border">
              <p>Image/Video Placeholder</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
