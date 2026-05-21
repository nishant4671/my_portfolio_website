import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import AchievementsSection from "@/components/AchievementsSection";
import { HobbiesSection, SkillsSection } from "@/components/SkillsAndHobbies";
import { ExperienceSection, ResumeSection } from "@/components/ExperienceAndResume";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      
      <FadeIn>
        <ProjectsSection />
      </FadeIn>
      
      <FadeIn>
        <EducationSection />
      </FadeIn>

      <FadeIn>
        <CertificationsSection />
      </FadeIn>
      
      <FadeIn>
        <AchievementsSection />
      </FadeIn>
      
      <FadeIn>
        <HobbiesSection />
      </FadeIn>
      
      <FadeIn>
        <SkillsSection />
      </FadeIn>
      
      <FadeIn>
        <ExperienceSection />
      </FadeIn>
      
      <FadeIn>
        <ResumeSection />
      </FadeIn>
    </div>
  );
}
