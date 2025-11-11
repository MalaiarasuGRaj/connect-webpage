import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Briefcase, GraduationCap } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers - Join Our Team",
  description: "Explore career opportunities at Connect Training Solutions. We are looking for passionate individuals to join our team of trainers and content developers.",
};


const opportunities = [
    {
        icon: <Briefcase className="h-8 w-8 text-primary" />,
        title: "Senior Aptitude Trainer",
        location: "Tirunelveli (On-site)",
        description: "We are looking for an experienced trainer with a passion for teaching and a deep understanding of quantitative and logical reasoning concepts."
    },
    {
        icon: <GraduationCap className="h-8 w-8 text-primary" />,
        title: "Internship: Content Development",
        location: "Remote",
        description: "Join our team as a content development intern to help create engaging training materials and assessments for our various programs."
    }
]

export default function CareersPage() {
    const bannerImage = PlaceHolderImages.find(p => p.id === 'careers-banner');

  return (
    <div>
        <div className="relative bg-secondary py-24 sm:py-32">
            {bannerImage && (
                 <div className="absolute inset-0">
                    <Image
                        src={bannerImage.imageUrl}
                        alt={bannerImage.description}
                        data-ai-hint={bannerImage.imageHint}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>
            )}
            <div className="container relative text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white font-headline sm:text-5xl">
                Join Our Team
                </h1>
                <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
                Be a part of a dynamic team dedicated to shaping the future of young professionals across India.
                </p>
            </div>
        </div>

        <div className="container py-16 sm:py-24">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">
                    Why Work With Us?
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                    At Connect Training Solutions, you'll find a culture of growth, impact, and collaboration. We believe in empowering our team members just as we empower our students.
                </p>
            </div>

            <div className="mt-16">
                 <h3 className="text-2xl font-bold tracking-tight font-headline text-center mb-10">
                    Current Openings
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {opportunities.map((job) => (
                        <Card key={job.title}>
                            <CardHeader>
                                {job.icon}
                                <CardTitle className="pt-4">{job.title}</CardTitle>
                                <CardDescription>{job.location}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">{job.description}</p>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button>Apply Now <ArrowRight className="ml-2 h-4 w-4" /></Button>
                            </div>
                        </Card>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <p className="text-muted-foreground">Don't see a role that fits? Send your resume to</p>
                    <a href="mailto:careers@connecttrainings.com" className="font-semibold text-primary hover:underline">careers@connecttrainings.com</a>
                </div>
            </div>
        </div>

    </div>
  );
}
