import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog-posts';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { format } from 'date-fns';
import { Metadata } from 'next';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Connect Training Solutions Blog`,
    description: post.excerpt,
    openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        publishedTime: post.date,
        authors: [post.author],
    },
  }
}

export async function generateStaticParams() {
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
  const authorImageId = post.author.toLowerCase().split(' ')[0] + '-dharan'; // simplistic mapping
  const authorImage = PlaceHolderImages.find(p => p.id.includes(post.author.toLowerCase().split(' ')[0]));


  return (
    <article>
        <header className="relative py-24 sm:py-32">
            {image && (
                <div className="absolute inset-0">
                    <Image
                        src={image.imageUrl}
                        alt={post.title}
                        data-ai-hint={image.imageHint}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>
            )}
            <div className="container relative text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white font-headline sm:text-5xl">
                {post.title}
                </h1>
                <div className="mt-6 flex justify-center items-center gap-4 text-gray-200">
                    {authorImage && (
                        <Avatar>
                            <Image src={authorImage.imageUrl} alt={post.author} width={40} height={40} />
                            <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                        </Avatar>
                    )}
                    <div>
                        <p className="font-semibold">{post.author}</p>
                        <time dateTime={post.date}>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
                    </div>
                </div>
            </div>
        </header>

      <div className="container max-w-3xl mx-auto py-16">
        <div 
            className="prose prose-lg dark:prose-invert max-w-none 
                       prose-headings:font-headline prose-headings:text-foreground
                       prose-h2:text-3xl prose-h3:text-2xl
                       prose-p:text-muted-foreground prose-a:text-primary
                       prose-strong:text-foreground
                       prose-ul:text-muted-foreground prose-ol:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </div>
    </article>
  );
}
