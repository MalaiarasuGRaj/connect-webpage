import { ServicesShowcase } from "@/components/homepage/services-showcase";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Placement Training Services",
  description: "Explore our comprehensive suite of placement training programs, including aptitude training, technical skills, interview preparation, and soft skills development.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesShowcase />
    </>
  );
}
