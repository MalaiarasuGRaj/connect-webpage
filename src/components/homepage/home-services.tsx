import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { 
  BrainCircuit, 
  Briefcase, 
  MessageSquare, 
  FileText, 
  Code, 
  Users, 
  TrendingUp,
  Target
} from "lucide-react";
import { cn } from "@/lib/utils";

const trainingAreas = [
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: "Core Aptitude Mastery",
    description: "Build a strong foundation in logical, quantitative, and verbal reasoning to excel in any placement test.",
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Technical Skill Enhancement",
    description: "Gain hands-on experience with in-demand programming languages and technologies relevant to industry needs.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Professional Skills Development",
    description: "Develop crucial soft skills, including communication, teamwork, and leadership, to thrive in corporate environments.",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "Interview Readiness",
    description: "Master the art of interviewing with mock sessions, resume workshops, and strategies for both technical and HR rounds.",
  },
];

export function HomeServices() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="pr-8">
            <p className="text-primary font-semibold tracking-wide">WHAT WE DO</p>
            <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl mt-2">
              A Curriculum Designed for Success
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Our training methodology goes beyond traditional learning. We focus on a holistic approach that ensures every student is not just academically proficient, but also professionally prepared for the challenges of the modern workplace.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <p className="font-semibold text-foreground">Our goal is to turn potential into high-performance careers.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {trainingAreas.map((area) => (
              <Card key={area.title} className="bg-card text-card-foreground transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4">
                    {area.icon}
                  </div>
                  <CardTitle className="text-lg font-bold">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
