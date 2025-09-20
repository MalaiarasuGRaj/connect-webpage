import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
    {
        title: "Boosting Placement Rate by 40% at XYZ College",
        category: "Institutional Collaboration",
        description: "We partnered with XYZ College of Engineering to implement a campus-wide, year-long training program. Our integrated curriculum and mock interview sessions led to a 40% increase in their overall placement rate in a single academic year.",
        imageId: "case-study-2"
    },
    {
        title: "From Shy Student to Confident Professional: Priya's Story",
        category: "Student Placement",
        description: "Priya, a mechanical engineering student, struggled with communication and confidence. Through our intensive soft skills and interview preparation modules, she transformed her abilities and secured a position at a leading automotive company.",
        imageId: "case-study-1"
    }
]

export default function CaseStudiesPage() {
  return (
    <div className="container py-16 sm:py-24">
        <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">
                Our Success Stories
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
                Discover how our tailored training programs have made a real-world impact on students and institutions.
            </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => {
                const image = PlaceHolderImages.find(p => p.id === study.imageId);
                return (
                    <Card key={study.title} className="flex flex-col">
                        {image && (
                            <div className="aspect-video relative overflow-hidden rounded-t-lg">
                                <Image
                                    src={image.imageUrl}
                                    alt={image.description}
                                    data-ai-hint={image.imageHint}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}
                        <CardHeader>
                            <p className="text-sm font-semibold text-primary">{study.category}</p>
                            <CardTitle>{study.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <CardDescription>{study.description}</CardDescription>
                        </CardContent>
                        <CardFooter>
                            <Button variant="link" className="p-0">Read More <ArrowRight className="ml-2 h-4 w-4" /></Button>
                        </CardFooter>
                    </Card>
                )
            })}
        </div>
    </div>
  );
}
