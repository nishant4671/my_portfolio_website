import { education } from "@/lib/data";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, GraduationCap, Award, MapPin } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function EducationPage({ params }: { params: { slug: string } }) {
  const item = education.find((e) => e.slug === params.slug);

  if (!item) {
    notFound();
  }

  const isCollege = item.slug === "college";

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container px-6 max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-12 transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Back to Portfolio
        </Link>

        <header className="mb-16">
          <div className="flex items-center gap-4 text-primary mb-4">
            <GraduationCap size={32} />
            <span className="text-sm font-bold uppercase tracking-widest">{item.type}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">{item.title}</h1>
        </header>

        <div className="grid gap-8">
          {/* Overview Section */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen size={20} className="text-primary" />
                Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              {/* TODO: Add description */}
              {isCollege ? (
                <p>
                  Pursuing a B.Tech in Information Technology at Bharati Vidyapeeth College of Engineering, Pune. 
                  Currently maintaining a CGPA of 9.45/10 and ranked in the top 5% of the class. 
                  Expected graduation in June 2026.
                </p>
              ) : (
                <p>
                  Completed schooling at Rashtriya Military School, Belgaum. 
                  Held the prestigious Adjutant rank and excelled in both academics and leadership.
                </p>
              )}
            </CardContent>
          </Card>

          {/* Dynamic Content Based on Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award size={20} className="text-primary" />
                  {isCollege ? "Coursework" : "Academics"}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="list-disc list-inside space-y-2">
                  {isCollege ? (
                    <>
                      <li>Data Structures & Algorithms</li>
                      <li>Operating Systems</li>
                      <li>Database Management Systems</li>
                      <li>Machine Learning</li>
                      <li>Software Engineering</li>
                    </>
                  ) : (
                    <>
                      <li>Mathematics Topper</li>
                      <li>Science & Technology</li>
                      <li>English Literature</li>
                    </>
                  )}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin size={20} className="text-primary" />
                  Activities
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="list-disc list-inside space-y-2">
                  {isCollege ? (
                    <>
                      <li>Smart India Hackathon 2024</li>
                      <li>Technical Society Lead</li>
                      <li>AI Research Projects</li>
                    </>
                  ) : (
                    <>
                      <li>Battalion Operations</li>
                      <li>Endurance Training</li>
                      <li>Military Drill</li>
                    </>
                  )}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Placeholder for further details */}
          <section className="mt-8 border-t border-border pt-12">
            <h2 className="text-2xl font-bold mb-6">Additional Information</h2>
            <div className="p-8 bg-muted/20 rounded-2xl border border-dashed border-border text-center text-muted-foreground">
              {/* TODO: Nishant to fill this section */}
              <p>Section for Memorable Moments, Clubs, and specific achievements coming soon.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
