"use client";

import React from "react";
import Link from "next/link";
import { education } from "@/lib/data";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { GraduationCap } from "lucide-react";

const EducationCard = ({ item }: { item: any }) => {
  return (
    <Link href={`/education/${item.slug}`} target="_blank">
      <Card className="project-card-glow h-full flex flex-col bg-card border-border hover:translate-y-[-4px] transition-all duration-300">
        <CardHeader className="flex flex-row items-center gap-4">
          <div className="p-3 bg-muted rounded-lg">
            <GraduationCap className="text-primary" size={24} />
          </div>
          <CardTitle className="text-lg font-bold leading-tight">{item.title}</CardTitle>
        </CardHeader>
      </Card>
    </Link>
  );
};

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-muted/30">
      <div className="container px-6">
        <h2 className="text-3xl font-bold mb-12">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((item) => (
            <EducationCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
