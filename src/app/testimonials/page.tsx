import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import { testimonials } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Testimonials | Connect Training Solutions",
  description: "Read testimonials from students, engineering colleges, and industry professionals who have benefited from our placement training programs.",
};


export default function TestimonialsPage() {
  return (
    <div className="container py-16 sm:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">
          What Our Partners & Students Say
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
          Real feedback from the people we've had the pleasure to work with.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => {
          const image = PlaceHolderImages.find(p => p.id === testimonial.imageId);
          return (
            <Card key={index} className="flex flex-col">
              <CardContent className="flex flex-col items-start gap-4 p-6 flex-grow">
                <blockquote className="text-lg border-l-4 border-primary pl-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4 mt-auto pt-4">
                  {image && (
                    <Avatar>
                      <AvatarImage src={image.imageUrl} alt={testimonial.name} data-ai-hint={image.imageHint} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  );
}
