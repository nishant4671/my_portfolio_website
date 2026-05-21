"use client";

import React from "react";
import { certifications, Certification } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Award, Calendar, ExternalLink } from "lucide-react";

const CertificationCard = ({ cert }: { cert: Certification }) => {
  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2 text-primary">
            <Award size={20} />
            <span className="text-xs font-bold uppercase tracking-wider">{cert.issuer}</span>
          </div>
          {cert.link && cert.link !== "#" && (
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <ExternalLink size={16} />
            </a>
          )}
        </div>
        <CardTitle className="text-xl font-bold mt-2">{cert.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
          <Calendar size={14} />
          <span>{cert.date}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {cert.skills.map((skill: string) => (
            <Badge key={skill} variant="secondary" className="bg-muted text-xs">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const CertificationsSection = () => {
  if (!certifications || certifications.length === 0) return null;

  return (
    <section id="certifications" className="py-24">
      <div className="container px-6">
        <h2 className="text-3xl font-bold mb-12">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
