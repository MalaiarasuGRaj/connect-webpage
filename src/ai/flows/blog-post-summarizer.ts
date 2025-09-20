// src/ai/flows/blog-post-summarizer.ts
'use server';

/**
 * @fileOverview Summarizes blog posts for quick understanding.
 *
 * - summarizeBlogPost - A function that summarizes a blog post.
 * - BlogPostSummarizerInput - The input type for the summarizeBlogPost function.
 * - BlogPostSummarizerOutput - The return type for the summarizeBlogPost function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const BlogPostSummarizerInputSchema = z.object({
  blogPostContent: z
    .string()
    .describe('The content of the blog post to be summarized.'),
});
export type BlogPostSummarizerInput = z.infer<typeof BlogPostSummarizerInputSchema>;

const BlogPostSummarizerOutputSchema = z.object({
  summary: z.string().describe('A short summary of the blog post.'),
});
export type BlogPostSummarizerOutput = z.infer<typeof BlogPostSummarizerOutputSchema>;

export async function summarizeBlogPost(input: BlogPostSummarizerInput): Promise<BlogPostSummarizerOutput> {
  return summarizeBlogPostFlow(input);
}

const prompt = ai.definePrompt({
  name: 'blogPostSummarizerPrompt',
  input: {schema: BlogPostSummarizerInputSchema},
  output: {schema: BlogPostSummarizerOutputSchema},
  prompt: `Summarize the following blog post in a concise paragraph:

{{{blogPostContent}}}`, 
});

const summarizeBlogPostFlow = ai.defineFlow(
  {
    name: 'summarizeBlogPostFlow',
    inputSchema: BlogPostSummarizerInputSchema,
    outputSchema: BlogPostSummarizerOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
