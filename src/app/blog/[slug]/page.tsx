import { notFound } from "next/navigation";
import Image from "next/image";
import { blogPosts } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import BlogPostSummarizer from "@/components/blog/blog-post-summarizer";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const image = PlaceHolderImages.find(p => p.id === post.imageId);

  return (
    <article>
      <header className="relative py-24 sm:py-32 bg-secondary">
        {image && (
            <div className="absolute inset-0">
                <Image
                    src={image.imageUrl}
                    alt={post.title}
                    data-ai-hint={image.imageHint}
                    fill
                    className="object-cover"
                />
                 <div className="absolute inset-0 bg-black/50" />
            </div>
        )}
        <div className="container relative text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white font-headline sm:text-5xl">
                {post.title}
            </h1>
            <p className="mt-6 text-lg text-gray-200">
                By {post.author} on {new Date(post.date).toLocaleDateString()}
            </p>
        </div>
      </header>

      <div className="container max-w-4xl mx-auto py-16">
        <BlogPostSummarizer content={post.content} />
        <div
          className="prose prose-lg lg:prose-xl max-w-none prose-headings:font-headline prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}
