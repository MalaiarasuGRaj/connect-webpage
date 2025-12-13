import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10 opacity-50 pointer-events-none" />

      <div className="container px-4 md:px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-xl">
              <Sparkles className="mr-2 h-3.5 w-3.5" />
              <span className="text-xs md:text-sm">Transforming Engineering Careers</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Bridging <span className="text-gradient-primary">Academia</span> <br className="hidden md:block" /> and Industry
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] leading-relaxed">
              Empowering engineering students with the essential skills to excel in their careers and meet the demands of the modern industry.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" className="rounded-full h-12 px-8 text-base bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all font-semibold" asChild>
                <Link href="/contact">
                  Start Your Journey
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base border-white/10 bg-white/5 hover:bg-white/10 hover:text-white backdrop-blur-sm" asChild>
                <Link href="/services">
                  Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="pt-4 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Industry Expert Trainers</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Proven Curriculum</span>
              </div>
            </div>
          </div>

          <div className="relative mx-auto lg:ml-auto max-w-[500px] lg:max-w-none w-full aspect-square lg:aspect-auto lg:h-[600px] flex items-center justify-center">
            {/* Abstract Shapes/Blob behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-full blur-[60px] animate-pulse-slow" />

            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/10 bg-background/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
              <Image
                src="/images/training-session.png"
                alt="A training session in progress"
                data-ai-hint="training session"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              {/* Floating Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-20 glass-card p-4 rounded-xl flex items-center gap-4 animate-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-backwards">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-white">300k+ Students</p>
                  <p className="text-xs text-muted-foreground">Empowered across India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
