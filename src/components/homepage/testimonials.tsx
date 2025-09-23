import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { testimonials } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-background">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">
            What Our Partners & Students Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from the people we've had the pleasure to work with.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full mt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
                const image = PlaceHolderImages.find(p => p.id === testimonial.imageId);
                return (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-4 h-full">
                        <Card className="h-full flex flex-col">
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
                        </div>
                    </CarouselItem>
                )
            })}
          </CarouselContent>
          <CarouselPrevious className="flex -left-2 sm:-left-4 lg:-left-12" />
          <CarouselNext className="flex -right-2 sm:-right-4 lg:-right-12" />
        </Carousel>
      </div>
    </section>
  );
}
