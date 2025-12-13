import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  BrainCircuit,
  Briefcase,
  Code,
  Users,
  Target,
  ArrowUpRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const trainingAreas = [
  {
    icon: BrainCircuit,
    title: "Core Aptitude Mastery",
    description: "Build a strong foundation in logical, quantitative, and verbal reasoning to excel in any placement test.",
    colSpan: "md:col-span-2",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Code,
    title: "Technical Excellence",
    description: "Hands-on mastery of full-stack development, algorithms, and system design.",
    colSpan: "md:col-span-1",
    gradient: "from-violet-500/20 to-purple-500/20"
  },
  {
    icon: Users,
    title: "Soft Skills & Leadership",
    description: "Communication, teamwork, and leadership skills for the modern corporate world.",
    colSpan: "md:col-span-1",
    gradient: "from-emerald-500/20 to-green-500/20"
  },
  {
    icon: Briefcase,
    title: "Interview Readiness",
    description: "Mock interviews, resume building, and strategic preparation for HR & technical rounds.",
    colSpan: "md:col-span-2",
    gradient: "from-orange-500/20 to-red-500/20"
  },
];

export function HomeServices() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />

      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-end mb-16">
          <div className="max-w-2xl">
            <p className="text-accent font-semibold tracking-wide uppercase text-sm mb-4">What We Do</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-headline">
              Comprehensive Training <br /> <span className="text-muted-foreground">for Future Leaders.</span>
            </h2>
          </div>
          <div className="md:ml-auto max-w-sm">
            <p className="text-muted-foreground leading-relaxed">
              Our holistic curriculum ensures every student is not just academically proficient, but professionally prepared for the challenges of top-tier companies.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trainingAreas.map((area, index) => (
            <div
              key={area.title}
              className={cn(
                "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5",
                area.colSpan
              )}
            >
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                area.gradient
              )} />

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white shadow-inner">
                  <area.icon className="h-6 w-6" />
                </div>

                <h3 className="text-2xl font-bold mb-3">{area.title}</h3>
                <p className="text-muted-foreground mb-6 flex-1">
                  {area.description}
                </p>

                <div className="mt-auto pt-4 border-t border-white/5 flex items-center text-sm font-medium text-primary opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  Learn more <ArrowUpRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
