import { Hero } from "@/components/homepage/hero";
import { ImpactStats } from "@/components/homepage/impact-stats";
import { ServicesShowcase } from "@/components/homepage/services-showcase";
import { Testimonials } from "@/components/homepage/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesShowcase />
      <ImpactStats />
      <Testimonials />
    </>
  );
}
