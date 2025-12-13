import { Hero } from "@/components/homepage/hero";
import { ImpactStats } from "@/components/homepage/impact-stats";
import { HomeServices } from "@/components/homepage/home-services";
import { Testimonials } from "@/components/homepage/testimonials";
import { CompanyMarquee } from "@/components/company-marquee";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Connect Training Solutions",
  "legalName": "Connect Training Solutions Pvt Ltd",
  "url": "https://www.connecttrainings.com",
  "logo": "https://www.connecttrainings.com/images/logo.jpeg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-123-456-7890",
    "contactType": "customer service",
    "email": "contact@connecttrainings.com"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "",
    "addressLocality": "Tirunelveli",
    "addressRegion": "Tamil Nadu",
    "postalCode": "",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://twitter.com/",
    "https://www.linkedin.com/company/"
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Hero />
      <HomeServices />
      <ImpactStats />
      <CompanyMarquee />
      <Testimonials />
    </>
  );
}
