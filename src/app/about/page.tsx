import Image from "next/image";

import { Metadata } from "next";
import { CompanyMarquee } from "@/components/company-marquee";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Linkedin } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the mission, vision, and leadership of Connect Training Solutions Pvt Ltd, founded in 2015 to bridge the gap between academia and industry.",
};

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">
            About Connect Training Solutions
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            Founded in 2015, our mission is to empower students by bridging the critical gap between academic knowledge and industry requirements, ensuring they are placement-ready.
          </p>
        </div>

        <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-sm">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight font-headline text-primary mb-6">Our Story</h2>
              <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Connect Training Solutions Pvt Ltd was born from a vision to revolutionize placement training in India. Our founders, Murali Dharan Rajasekar and Angala Eswari, identified a pressing need to equip engineering students with practical, industry-relevant skills that go beyond textbook learning.
                </p>
                <p>
                  From our headquarters in Tirunelveli, Tamil Nadu, we have grown to serve over 100 institutions across the country, training more than 300,000 students. Our focus remains steadfast: to create a generation of confident, skilled professionals ready to make an immediate impact in the corporate world.
                </p>

                <div className="pt-0 mt-2 flex flex-col items-center">
                  <div className="max-w-xs text-center relative">
                    <p className="font-handwriting text-5xl text-primary/80 transform -rotate-2 leading-[0.8]">
                      "To begin, begin"
                    </p>
                    <p className="text-sm text-muted-foreground -mt-7 font-medium text-right pr-4">
                      — William Wordsworth
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center shrink-0 w-full md:w-72 bg-black/20 p-4 rounded-xl border border-white/5">
              <div className="rounded-lg overflow-hidden shadow-lg w-full aspect-[3/4] relative">
                <Image
                  src="/images/MuraliSir.jpg"
                  alt="Mr. Murali Dharan Rajasekar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="font-bold text-primary text-base">
                  Mr. Murali Dharan Rajasekar
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Founder & Director
                </p>
                <p className="text-[10px] text-muted-foreground/60 uppercase tracking-widest mt-1">
                  Connect Training Solutions
                </p>
                <Button variant="ghost" size="sm" className="mt-3 h-8 w-8 rounded-full hover:bg-[#0077b5] hover:text-white transition-colors" asChild>
                  <Link href="https://www.linkedin.com/in/connectmurali/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

          </div>
        </div>

        <CompanyMarquee />

      </div>
    </div>
  );
}
