"use client";

import React from "react";
import { hobbies, skills } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";

const HobbiesSection = () => {
  return (
    <section id="hobbies" className="py-24 bg-muted/30">
      <div className="container px-6">
        <h2 className="text-3xl font-bold mb-8">Hobbies</h2>
        <div className="flex flex-wrap gap-3">
          {hobbies.map((hobby) => (
            <Badge key={hobby} variant="outline" className="text-sm py-2 px-6 border-primary/30 text-foreground/80">
              {hobby}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container px-6">
        <h2 className="text-3xl font-bold mb-12">Skills</h2>
        <div className="space-y-12">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-6 text-primary/80 uppercase tracking-widest">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-muted text-sm py-1.5 px-4 font-normal">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { HobbiesSection, SkillsSection };
