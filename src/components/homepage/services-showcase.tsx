import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  BrainCircuit, 
  Briefcase, 
  MessageSquare, 
  FileText, 
  Code, 
  Users, 
  Building, 
  Presentation, 
  GraduationCap 
} from "lucide-react";

const services = [
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    title: "Placement Induction",
    description: "Comprehensive programs to prepare final-year students for campus placements.",
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: "Aptitude Training",
    description: "Master quantitative, logical, and verbal reasoning skills for competitive exams.",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "Interview Skills",
    description: "Techniques to confidently handle technical and HR interview rounds.",
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    title: "Communication Skills",
    description: "Enhance verbal and written communication for professional environments.",
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "Resume Writing",
    description: "Craft compelling resumes that capture the attention of recruiters.",
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Technical Training",
    description: "Workshops on in-demand programming languages and technical concepts.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Soft Skills",
    description: "Develop crucial interpersonal skills like teamwork, leadership, and etiquette.",
  },
  {
    icon: <Building className="h-8 w-8 text-primary" />,
    title: "Corporate Workshops",
    description: "Customized training solutions for companies and working professionals.",
  },
  {
    icon: <Presentation className="h-8 w-8 text-primary" />,
    title: "Webinars",
    description: "Engaging online sessions on various career development topics.",
  },
];

export function ServicesShowcase() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-background">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">
            Our Training Programs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive suite of training programs designed to equip students with the skills needed for a successful career.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col items-start p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">{service.icon}</div>
              <CardHeader className="p-0">
                <CardTitle className="text-lg font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription className="mt-2 text-base">
                {service.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
