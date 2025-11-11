import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { blogPosts } from "@/lib/blog-posts";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { format } from 'date-fns';

export const metadata: Metadata = {
  title: "Blog - Placement Training & Interview Tips",
  description: "Read our blog for the latest tips on placement training, resume writing, acing technical interviews for companies like TCS, and other career advice.",
};

export default function BlogPage() {
  return (
    <div className="container py-16 sm:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">
          Our Blog
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
          Insights, tips, and guides on placement training, career development, and acing your interviews.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => {
          const image = PlaceHolderImages.find(p => p.id === post.imageId);
          return (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <Card className="h-full flex flex-col transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-1">
                <CardHeader>
                  {image && (
                    <div className="aspect-video w-full overflow-hidden rounded-t-lg mb-4">
                      <Image
                        src={image.imageUrl}
                        alt={post.title}
                        data-ai-hint={image.imageHint}
                        width={600}
                        height={338}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  <CardDescription>
                    <time dateTime={post.date}>{format(new Date(post.date), 'MMMM d, yyyy')}</time> by {post.author}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  );
}
