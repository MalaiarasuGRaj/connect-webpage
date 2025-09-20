import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { blogPosts } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="container py-16 sm:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">
          From Our Blog
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
          Insights on career tips, industry trends, and placement success stories to guide you on your professional journey.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => {
          const image = PlaceHolderImages.find(p => p.id === post.imageId);
          return (
            <Card key={post.slug} className="flex flex-col">
              {image && (
                <Link href={`/blog/${post.slug}`} className="block aspect-video relative overflow-hidden rounded-t-lg">
                    <Image
                        src={image.imageUrl}
                        alt={post.title}
                        data-ai-hint={image.imageHint}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                </Link>
              )}
              <CardHeader>
                <CardTitle>
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
                <p className="text-sm text-muted-foreground">By {post.author} on {new Date(post.date).toLocaleDateString()}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{post.excerpt}</CardDescription>
              </CardContent>
              <CardFooter>
                <Link href={`/blog/${post.slug}`} className="text-primary font-semibold hover:underline">
                  Read More <ArrowRight className="inline-block ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
