"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. S. Rajesh",
    role: "Placement Officer, XYZ Engineering College",
    content: "Connect Training Solutions transformed our students' approach to placements. The aptitude training was precise and highly effective.",
    avatar: "SR"
  },
  {
    name: "Anitha K.",
    role: "Placed at Zoho Corp",
    content: "The technical training sessions were a game-changer. I learned not just to code, but to think like a developer. Highly recommended!",
    avatar: "AK"
  },
  {
    name: "Karthik M.",
    role: "Placed at TCS",
    content: "Soft skills training helped me overcome my fear of public speaking. The mock interviews gave me the confidence to crack the real one.",
    avatar: "KM"
  },
  {
    name: "Prof. Priya D.",
    role: "HOD CSE, ABC Institute",
    content: "Professional, punctual, and highly skilled trainers. The feedback from our students has been overwhelmingly positive year after year.",
    avatar: "PD"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-headline mb-4">
              Trusted by Institutions <br /> & Students Alike
            </h2>
            <p className="text-muted-foreground text-lg">
              Don't just take our word for it. Hear from the people whose careers and campuses we've impacted.
            </p>
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors">
                    <CardContent className="flex flex-col gap-6 p-8 h-full">
                      <Quote className="h-8 w-8 text-primary/40 rotate-180" />
                      <p className="text-lg text-muted-foreground flex-1 leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                        <Avatar className="h-10 w-10 border border-white/10">
                          <AvatarImage src="" />
                          <AvatarFallback className="bg-primary/20 text-primary font-bold">
                            {testimonial.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-foreground leading-none">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground mt-1">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-2 mt-8 md:mr-12">
            <CarouselPrevious className="static translate-y-0 h-12 w-12 border-primary/20 hover:bg-primary hover:text-white" />
            <CarouselNext className="static translate-y-0 h-12 w-12 border-primary/20 hover:bg-primary hover:text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
