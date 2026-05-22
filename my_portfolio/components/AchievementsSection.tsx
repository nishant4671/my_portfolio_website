import { achievements } from "@/lib/data";
import { Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24">
      <div className="container px-6">
        <h2 className="text-3xl font-bold mb-12">Achievements</h2>
        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-card border-border border-l-4 border-l-primary transition-all duration-300">
              <CardHeader className="flex flex-row items-start gap-4 pb-2">
                <Trophy className="text-primary mt-1 shrink-0" size={20} />
                <CardTitle className="text-xl font-bold">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground ml-9">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
