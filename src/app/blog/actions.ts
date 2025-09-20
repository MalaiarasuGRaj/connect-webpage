"use server";

import { summarizeBlogPost, BlogPostSummarizerInput } from "@/ai/flows/blog-post-summarizer";

export async function getSummary(input: BlogPostSummarizerInput) {
    try {
        const result = await summarizeBlogPost(input);
        return { success: true, summary: result.summary };
    } catch (error) {
        console.error(error);
        return { success: false, error: "Failed to generate summary." };
    }
}
