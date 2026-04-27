"use client";

import React from "react";
import Link from "next/link";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <Link href={`/projects/${project.slug}`} target="_blank">
      <Card className="project-card-glow h-full flex flex-col bg-card border-border hover:translate-y-[-4px] transition-all duration-300">
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl font-bold">{project.shortTitle}</CardTitle>
            <ArrowUpRight className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2 mt-2">
            {project.skills.map((skill: string) => (
              <Badge key={skill} variant="secondary" className="bg-muted text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container px-6">
        <h2 className="text-3xl font-bold mb-12">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
          
          {/* Open Source Card */}
          <Link href="/open-source" target="_blank">
            <Card className="project-card-glow h-full flex items-center justify-center bg-card border-border border-dashed hover:translate-y-[-4px] transition-all duration-300">
              <div className="text-center p-6">
                <CardTitle className="text-xl font-bold">Open Source</CardTitle>
                <p className="text-sm text-muted-foreground mt-2 italic">Coming soon</p>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
