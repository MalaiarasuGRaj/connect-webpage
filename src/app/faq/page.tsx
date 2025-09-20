import FaqGenerator from "@/components/faq/faq-generator";

export default function FaqPage() {
  return (
    <div className="container py-16 sm:py-24">
       <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">
          Frequently Asked Questions
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
          Have questions? Generate FAQs on any topic related to our services, or browse common inquiries below.
        </p>
      </div>
      <div className="mt-16 max-w-4xl mx-auto">
        <FaqGenerator />
      </div>
    </div>
  );
}
