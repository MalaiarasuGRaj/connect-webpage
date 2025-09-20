import { Hero } from "@/components/homepage/hero";
import { ImpactStats } from "@/components/homepage/impact-stats";
import { HomeServices } from "@/components/homepage/home-services";
import { Testimonials } from "@/components/homepage/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeServices />
      <ImpactStats />
      <Testimonials />
    </>
  );
}
